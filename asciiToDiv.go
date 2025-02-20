package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func asciiToDiv(fileName string, className string) string {
	file, err := os.Open(fileName)
	if err != nil {
		panic("err")
	}

	builder := strings.Builder{}

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		builder.WriteString(fmt.Sprintf("<pre className='%s'>%s</pre>\n", className, scanner.Text()))
	}

	return builder.String()
}

func main() {
	fmt.Println(asciiToDiv("ascii.txt", "text-white/50 w-full text-center text-sm"))
}