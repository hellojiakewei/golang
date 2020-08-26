package main

import "fmt"
type animal interface {
	move()
	eat(string)
}
type cat struct {
	name string
	feet int8
}

func (c *cat) move(){
	fmt.Println("走猫步")
}
func (c *cat) eat(food string){
	fmt.Printf("我吃的食物是%s\n",food)
}
func main() {
	var a1 animal
	c:=&cat{
		name: "jiakewei",
		feet: 22,
	}
	c1:=&cat{
		name:"tom",
		feet: 23,
	}
	a1 = c
	a1 =c1
	a1.move()
	fmt.Printf("%p",a1)
	//c.name="jiakewe"
	//c.feet=20
	//c.eat("<・)))><<")
	//c.move()
}
