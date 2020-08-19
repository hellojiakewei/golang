#### 整数类型
有符号 -128~127 无符号0-255
go的字符串由字符组成（比较特殊）


iota 很重要


整数:
int8(-128 -> 127)
int16(-32768 -> 32767)
int32(-2,147,483,648 -> 2,147,483,647) int64(-9,223,372,036,854,775,808 -> 9,223,372,036,854,775,807)
无符号整数:
uint8(0 -> 255)
uint16(0 -> 65,535)
uint32(0 -> 4,294,967,295)
uint64(0 -> 18,446,744,073,709,551,615)
浮点型(IEEE-754 标准):
float32(+- 1e-45 -> +- 3.4 * 1e38) float64(+- 5 * 1e-324 -> 107 * 1e308)
int 型是计算最快的一种类型。
整型的零值为 0，浮点型的零值为 0.0。
float32 精确到小数点后 7 位，float64 精确到小数点后 15 位。由于精确度的缘故，你在使用 == 或者 != 来比较浮点数时应当非常小心。你最好在正式使用前测试对于精确度要求较高的运算。
你应该尽可能地使用 float64，因为 math 包中所有有关数学运算的函数都会要求接收这个类型。
你可以通过增加前缀 0 来表示 8 进制数(如:077)，增加前缀 0x 来表示 16 进制数(如:0xFF)，以 及使用 e 来表示 10 的连乘(如: 1e3 = 1000，或者 6.022e23 = 6.022 x 1e23)。