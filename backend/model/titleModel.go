package model

type TitleInfo struct {
	Titles []string
}

func NewTitle() *TitleInfo {
	return &TitleInfo{}
}

type TitleHandler struct {
	*TitleInfo
}

func NewTitleHandler() *TitleHandler {
	return &TitleHandler{TitleInfo: &TitleInfo{}}
}
