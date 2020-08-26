package main

import (
	"fmt"
	"strconv"
	"time"
)

func hello()  {
	for i := 0; i <20 ; i++ {
		fmt.Println("hello word hello" + strconv.Itoa(i))
		time.Sleep(time.Second)
	}
}
func main() {
	go hello()  // 开启一个协程
	for i := 0; i <10 ; i++ {
		fmt.Println("hello word main" + strconv.Itoa(i))
		time.Sleep(time.Second)
	}
}
