package main

import "fmt"

func main()  {
	const (
		a = iota
		b = iota
		c = iota
	)
	const  (
		Sunday = iota
		Monday
		Tuesday
		Wednesday
		Thursday
		Friday
		Saturday
	)
	fmt.Printf("a:%d,b:%d,c:%d\n", a, b, c)
	fmt.Printf("周一:%d,周二:%d\n",Sunday,Monday)
	//变量
	var (
		a1 int
		b2 bool
		str string
	)
	fmt.Printf("a:%d,b:%t,c:%s\n",a1,b2,str)
}
