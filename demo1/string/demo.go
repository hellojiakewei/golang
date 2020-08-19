package main

import "strings"

func main() {
	var str = "hello every, my name is jiakewei,nice to meet you"
	println(len(str))
	println(strings.Contains(str,"jiakewei"))
	println(strings.Repeat(str,3))
	println(strings.ToLower(str))
	println(strings.ToUpper(str))
}
