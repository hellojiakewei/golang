package main

import (
	"encoding/json"
	"fmt"
)

type Monster struct {
	Name string `json:"name"`
	Age int8 `json:"age"`
	Address string `json:"address"`
	Hobbdy []string `json:"hobbdy"`
}

func testStruct()  {
	m:=Monster{
		Name: "jiakewei",
		Age:25,
		Address: "黑背",
		Hobbdy: []string{"篮球","足球","乒乓球"},
	}
		//var m Monster
	//m.name="jiakewei"
	//m.address="河北保定"
	//m.age=28
	//m.hobbdy = []string{"篮球","足球","乒乓球"}
	fmt.Println(m)
	result, err := json.Marshal(m)
	if err !=nil{
		fmt.Println("序列化错误")
	}
	fmt.Printf("结果为%v\n",string(result))
}

func testMap()  {
	m1:=make(map[string]interface{},5)
	m1["name"] = "jiakewei"
	m1["address"] = "河北保定"
	m1["url"] = "www.baidu.com"
	data, err := json.Marshal(m1)
	if err !=nil {
		fmt.Println("map 转成json 错误")
	}
	fmt.Printf("result:%v\n",string(data))
}
func main() {
	testStruct()
	testMap()
}