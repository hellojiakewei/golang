package main

import (
	"fmt"
	"reflect"
)

/**
反射的入门演示
*/
func reflectTest(b interface{}) {
	//	通过反射获取传入值得 type kind 值
	//	先获取 reflect.type
	rType := reflect.TypeOf(b)
	fmt.Println(rType)
	rValue := reflect.ValueOf(b) // 200 并不是真正的值 是 reflect.value
	//n2:= 100 + rValue  报错   + rValue.int()
	fmt.Println(rValue)
	fmt.Printf("类型为%T\n", rValue)
	// 将rValue 转成interface
	iv := rValue.Interface()
	fmt.Println(iv)
	fmt.Printf("类型为%T\n", iv)
	//	将interface 通过断言转成需要的类型
	num2 := iv.(int)
	fmt.Println(num2)
}
func main() {
	num := 200
	reflectTest(num)
}
