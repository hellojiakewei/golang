package main

import "fmt"

func main() {
	var name string = "koaleweo"
	var p = &name
	fmt.Println(&name)
	fmt.Println(p)
	fmt.Println(*p)
	fmt.Println(*&name)

	var a *int
	fmt.Println(a)
	var a2 = new(int)
	fmt.Println(a2)
}
