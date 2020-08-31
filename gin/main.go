package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	//r.GET("/", func(c *gin.Context) {
	//	c.String(http.StatusOK, "hello World!")
	//})
	//r.Any("/any", func(c *gin.Context) {
	//	c.String(http.StatusOK,"any" )
	//})
	//fmt.Println(http.Dir("static"))
	//r.Static("/dist","./dist")
	//r.StaticFS("/static",http.Dir("/dist/static"))
	//r.StaticFile("/favicon.png","./dist/favicon.png")
	r.LoadHTMLGlob("dist/*.html")    // 添加入口index.html
	r.LoadHTMLFiles("static/*/*")	// 添加资源路径
	r.Static("/static", "./dist/static") 	// 添加资源路径
	r.StaticFile("/hello/", "./dist/index.html")  //前端接口

	// 3.监听端口，默认在8080
	// Run("里面不指定端口号默认为8080")
	r.Run(":8000")
}