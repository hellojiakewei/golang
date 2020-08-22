package main

import "fmt"

func main() {
	// 数组的初始化
	var a1 [3] bool
	fmt.Println(a1) //[false false false]
	a2:=[9] int{0,1,1,1,1,1,1,1,1}
	// 自动推算长度
	a3:= [...]string{"hell","hell","d"}
	// 根据索引指定数据 比如第1位是100
	a4:=[5]int{0:100,4:500}
	fmt.Println(a2)
	fmt.Println(a3)
	fmt.Println(a4)
	fmt.Println("hello")
	// 数组的遍历
	citys:=[...]string{"北京","上海","广州"}
	for i := 0; i <len(citys) ; i++ {
		fmt.Println(citys[i])
	}
	for k, v := range citys {
		fmt.Println(k,v)
	}
}
