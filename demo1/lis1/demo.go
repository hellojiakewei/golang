package main

import "fmt"

func main() {
	var n int16 = 34
	var m int32 =40
	//fmt.Println(n+m)  转换错误 因为 类型不一样 不支持隐士转换
	d := int32(n)
	fmt.Println(n)
	fmt.Println(m)
	fmt.Println(d)
	fmt.Println(int32(n)+m)
}
