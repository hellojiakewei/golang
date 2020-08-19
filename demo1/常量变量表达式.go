package main

import (
	"fmt"
	"unsafe"
)

func init()  {
	fmt.Println("init")
}
func main() {
	const url ="htrp:www.baidu.comsdasdaskd" +
		"asodas"
	fmt.Println(url)
	// 如何查看某个变量的数据类型
	var n1 = 100
	fmt.Printf("n1 的值为 %T",n1)
	//如何查看一个变量的字节大小
	var n2 int64 =10
	// unsafe.Sizeof(n2)  变量占用的字节数
	fmt.Printf("n2的数据类型%T n2占用的字节数是%d",n2,unsafe.Sizeof(n2))
	const (
		a = iota
		b = iota
		c = iota
	)
	fmt.Printf("a:%d,b:%d,c:%d", a, b, c)
}
func jiakewe(name string,age int)  {
	fmt.Printf(name,age)
}
