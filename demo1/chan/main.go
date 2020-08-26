package main

import "fmt"

func main() {
	var intChan chan int
	intChan = make(chan int,3)   // 必须make
	fmt.Println(len(intChan))
	// 向管道写入数据
	intChan <- 10
	intChan <- 11
	fmt.Println(len(intChan))
	num := <-intChan
	fmt.Println(num)
}
