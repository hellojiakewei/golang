package main

import "fmt"

type Circle struct {
	radius float64
}

func (c *Circle) area() float64 {
	c.radius =10
	return 3.14 * c.radius * c.radius
}
func main() {
	var c Circle
	c.radius = 5
	fmt.Println(c.area())
	fmt.Println(c.radius)
}
