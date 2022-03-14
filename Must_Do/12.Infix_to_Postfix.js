
function precei(c) { 
    if (c == "^") return 3;
    else if (c == "*" || c == "/") return 2;
    else if (c == "+" || c == "-") return 1;
    else return -1;
}

function infixToPostfix(str) { 
    let stack = []
    let res = ""
    for (var i = 0; i < str.length; i++) { 
        if (
          (str[i] >= "a" && str[i] <= "z") ||
          (str[i] >= "A" && str[i] <= "Z") ||
          (str[i] >= 0 && str[i] <= 9)
        ) {
          res += str[i];
        } else if (str[i] == "(") {
          stack.push(str[i]);
        } else if (str[i] == ")") {
          while (stack[stack.length - 1] != "(") {
            res += stack[stack.length - 1];
            stack.pop();
          }
          stack.pop();
        }
        // for operator
        else {
          while (
            stack.length != 0 &&
            precei(str[i]) <= precei(stack[stack.length - 1])
          ) {
            res += stack[stack.length - 1];
            stack.pop();
          }
          stack.push(str[i]);
        }
    }
    while (stack.length != 0) { 
        res += stack[stack.length - 1]
        stack.pop()
    }
    console.log(res)
}
infixToPostfix("a+b*(c^d-e)^(f+g*h)-i");
infixToPostfix("a+b*c^d-e");

//abcd^e-fgh*+^*+i-