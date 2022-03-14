// Check for Anagram! - Editorial
let str1 = "spar";
let str2 = "rasp";
let s1 = str1.split("").sort().join("")
let s2 = str2.split("").sort().join("");

if (s1 == s2) {
    console.log("anagram")
} else { 
    console.log("no anagram")
}
