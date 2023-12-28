package handler

import (
	"api/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

type TitleHandler struct {
	*model.TitleInfo
}

func NewTitle() *TitleHandler {
	return &TitleHandler{
		TitleInfo: &model.TitleInfo{
			Titles: []string{"バンジージャンプ", "蹴鞠", "書き初め"},
		},
	}
}

func (h *TitleHandler) ClearTitle(c *gin.Context) {
	h.Titles = []string{"全て叶いました✨", "また来年！"}
	c.JSON(http.StatusOK, gin.H{
		"Status": "OK",
	})
}

func (h *TitleHandler) GetTitle(c *gin.Context) {
	titlesArray := make([]gin.H, len(h.Titles))
	for i, t := range h.Titles {
		titlesArray[i] = gin.H{"title": t}
	}
	c.JSON(http.StatusOK, titlesArray)
}

func (h *TitleHandler) ResetTitle(c *gin.Context) {
	h.Titles = []string{"バンジージャンプ", "蹴鞠", "書き初め"}
	c.JSON(http.StatusOK, gin.H{
		"Status": "OK",
	})
}

func (h *TitleHandler) SendTitle(c *gin.Context) {
	title := c.Query("title")
	h.Titles = append(h.Titles, title)
	c.JSON(http.StatusOK, gin.H{
		"Status": "OK",
	})
}
