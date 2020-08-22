package main

import "fmt"

func main() {
	a1:=[]int{1,3,5}
	a2:=a1
	//var a3[] int  这样申请是不行的 因为var 生命的变量最开始没有内存空间
	var a3 = make([] int,3,3)
	copy(a3,a1)
	fmt.Println(a1,a2,a3)
	a1[0] = 100
	fmt.Println(a1,a2,a3) // a1 a2 变了 a3 不会变
}
