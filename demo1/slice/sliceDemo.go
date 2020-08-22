package main

import "fmt"

func main() {
	var s1[]int  // 默认为[]
	var s2[]string //[]
	fmt.Println(s1)
	fmt.Println(s2)
	fmt.Println(s1 == nil)
	fmt.Println(s2 ==nil)
	s1=[]int{1,2,3}
	s2=[]string{"沙河","张江","平山村"}
	for i, i2 := range s2 {
		println(i,i2)
	}
	// 长度和容量
	fmt.Println(len(s1))
	fmt.Println(len(s2))
	fmt.Println(cap(s1))
	fmt.Println(cap(s2))

	// 数组得到切片
	a1:=[...]int{1,2,3,4,5}
	s3:=a1[0:3] //切片动作  slice [1,2,3] 左包含 右不包含 [:4]->[0:4]     [1:]->[1:end] [:]
	fmt.Println(a1,s3)
	fmt.Println(cap(s3))
	// 切片扩容 append
	sl1:=[]string{"baoding","wangdu","hebei","zaizhuang"}
	sl1 =  append(sl1, "wi","dsad")  //必须用原来的变量接受追加的值 sl1... 扩展运算符
	fmt.Println(sl1)

}
