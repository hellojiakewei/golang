package main

import "fmt"

func main() {
	//var m1 map[string]string
	//fmt.Println(m1 == nil)
	m1 := make(map[string]string,10)
	m1["name"] = "jiakewei"
	m1["age"] = "22"
	m1["address"] = "baoding"
	fmt.Println(m1)
	value,ok :=m1["name"]
	fmt.Println(value,ok)
	fmt.Println(m1["dasdas"]) // 我们会拿到一个空值  推荐使用上述写法  OK 那种
	// map 的遍历
	for i, i2 := range m1 {
		fmt.Println(i,i2)
	}
	// 删除map 中的某个元素
	delete(m1,"name")
	fmt.Println(m1)
}
