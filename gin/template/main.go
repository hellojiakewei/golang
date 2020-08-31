package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r:=gin.Default()
	//r.GET("/", func(c *gin.Context) {
	//	c.String(http.StatusOK,"hello")
	//})
	r.GET("/user/:name/*action", func(c *gin.Context) {
		name:=c.Param("name")
		action:=c.Param("action")
		message:=name+"-"+action
		c.String(http.StatusOK,message)
	})
	// 获取get 参数
	r.GET("/", func(c *gin.Context) {
		username:=c.DefaultQuery("username","guest")
		password:=c.Query("password")
		c.JSON(http.StatusOK,gin.H{
			username: username,
			password: password,
		})
	})
	r.Run(":8000")
}
