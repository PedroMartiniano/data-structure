package main

func isPalindrome(word string) bool {
	reversedWord := ""
	for i := len(word) - 1; i >= 0; i-- {
		reversedWord += string(word[i])
	}

	return word == reversedWord
}
