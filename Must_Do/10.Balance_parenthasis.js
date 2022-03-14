// Given a string S having N characters.Any of the characters of the string are either of
// '(', '{', '[', ')', '}', ']'.
// Check whether the pairs and the orders of '{', '}', '(', ')', '[', ']' are correct or not.

function CheckBalance(str) { 
    let stack = []
    let top = -1
    let flag = 0
    for (var i = 0; i < str.length; i++) { 
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i])
            top++
        } else { 
            if ((str[i] == ")" && stack[top] != "(") || (str[i] == "}" && stack[top] != "{") ||
                (str[i] == "]" && stack[top] != "[")) {
                flag = 1
                break;
            } else { 
                stack.pop()
                top--
            }
        }
    }
    if (flag == 0) {
        if (top <= -1) {
            console.log("balanced")
        } else {
            console.log("not balanced")
        }
    } else { 
        console.log('not balanced')
    }
}
CheckBalance("{}"); 