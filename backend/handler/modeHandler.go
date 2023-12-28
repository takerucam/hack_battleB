package handler

import (
	"api/model"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type ModeHandler struct {
	*model.ModeInfo
}

func NewMode() *ModeHandler {
	return &ModeHandler{ModeInfo: &model.ModeInfo{Mode: 0}}
}

func (h *ModeHandler) GetMode(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"mode": h.Mode})
}

func (h *ModeHandler) SetMode(c *gin.Context) {
	modeString := c.Query("mode")

	modeInt, err := strconv.Atoi(modeString)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"Status": "Bad",
		})
		return
	}

	switch modeInt {
	case 0:
		h.Mode = modeInt
		c.JSON(http.StatusOK, gin.H{
			"Status": "OK",
		})
		return
	case 1:
		h.Mode = modeInt
		c.JSON(http.StatusOK, gin.H{
			"Status": "OK",
		})
		return
	default:
		c.JSON(http.StatusOK, gin.H{
			"Status": "Bad",
		})
		return
	}
}
