package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strings"
)

var chars = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=[]{}|;:'\",.<>?/~")



func asciiToDiv(fileName string, className string) string {
	file, err := os.Open(fileName)
	if err != nil {
		panic("err")
	}

	builder := strings.Builder{}

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		builder.WriteString(fmt.Sprintf("<pre className='%s'>{`%s`}</pre>\n", className, scanner.Text()))
	}

	return builder.String()
}

func RandomizeChars(fileName string, char rune) string {
	file, err := os.ReadFile(fileName)
	if err != nil {
		panic("err")
	}

	for i, v := range file {
		if v == byte(char) {
			idx := rand.Intn(len(chars)-1)
			

			file[i] = byte(chars[idx])
		}
	}

	return string(file)
}

func main() {
	fmt.Println(asciiToDiv("ascii.txt", "text-white/50 w-full text-center text-sm"))
	fmt.Println(RandomizeChars("./src/components/AsciiIcons.tsx", '$'))
}