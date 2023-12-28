// // https://deno.land/std@0.194.0/http/server.ts?s=serve
// import { serve } from "http/server.ts";
// // https://deno.land/std@0.194.0/http/file_server.ts?s=serveDir
// import { serveDir } from "http/file_server.ts";

// /**
//  * APIリクエストを処理する
//  */
// serve((req) => {
//   // URLのパスを取得
//   const pathname = new URL(req.url).pathname;
//   console.log(pathname);
//   // パスが'/welcome-message'だったら「'jigインターンへようこそ！'」の文字を返す
//   if (req.method === "GET" && pathname === "/welcome-message") {
//     return new Response("jig.jpインターンへようこそ！👍");
//   }

//   // publicフォルダ内にあるファイルを返す
//   return serveDir(req, {
//     fsRoot: "public",
//     urlRoot: "",
//     showDirListing: true,
//     enableCors: true,
//   });
// });

import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import WebPush from "./WebPush.js";
import { UUID } from "https://code4sabae.github.io/js/UUID.js";

await Deno.mkdir("data/subscription", { recursive: true });

serveAPI("/api/", async (param, req, path, conninfo) => {
  if (path == "/api/subscribe") {
    const subscription = param;
    const uuid = UUID.generate();
    await Deno.writeTextFile(
      "data/subscription/" + uuid + ".json",
      JSON.stringify(subscription)
    );
    console.log("subscribe", uuid);
    return { uuid };
  }
  if (path == "/api/unsubscribe") {
    const uuid = param.uuid;
    await Deno.remove("data/subscription/" + uuid + ".json");
    console.log("unsubscribe", uuid);
    return { uuid };
  }
  if (path == "/api/push") {
    try {
      const uuid = param.uuid;
      const data = param.data;
      console.log("push", uuid, data);
      const res = await WebPush.push(uuid, data);
      return { res };
    } catch (e) {
      console.log(e);
    }
  }
  return { res: "err" };
});
