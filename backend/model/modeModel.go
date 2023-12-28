package model

type ModeInfo struct {
	Mode int
}

func NewMode() *ModeInfo {
	return &ModeInfo{}
}

type ModeHandler struct {
	*ModeInfo
}

func NewModeHandler() *ModeHandler {
	return &ModeHandler{ModeInfo: &ModeInfo{}}
}
