package main

import "fmt"

type people struct {
	name    string
	age     int
	address string
}

func main() {
	var p people
	fmt.Println("是指针吗？", p)
	p.name = "jiakewei"
	p.age = 20
	fmt.Println(p)

	p2 := people{
		name:    "wangxindeng",
		age:     33,
		address: "望都县",
	}
	fmt.Println(p2)
	p3 := new(people)
	fmt.Println("指针？", p3)
	(*p3).name = "xiaoyao"
	(*p3).age = 22
	p3.address = "河北省保定市"
	fmt.Println(p3)

}
