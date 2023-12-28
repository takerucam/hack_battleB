package main

import (
	"api/handler"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// gin.SetMode(gin.ReleaseMode) // リリースモード！！！
	r := gin.Default()

	// CORS
	r.Use(cors.Default()) // 全部のオリジン許可

	t := handler.NewTitle()
	m := handler.NewMode()

	r.GET("/clear", t.ClearTitle)
	r.GET("/getMode", m.GetMode)
	r.GET("/getTitle", t.GetTitle)
	r.GET("/reset", t.ResetTitle)
	r.GET("/setMode", m.SetMode)
	r.GET("/sendTitle", t.SendTitle)

	r.Run()
}
