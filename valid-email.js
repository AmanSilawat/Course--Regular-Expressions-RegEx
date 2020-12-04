/*

[]          // single charcter
[abc123]000 // All Match     // a000 b000 c000 1000 
[^a]000 // not matched a000  //      b000 c000 1000 
[0-1]* // secquence match
[0-9]{11} // match only 11 numbers
[a-z]{4,8} // match 4 to 8 word length match
[a-z]{4,} // match 4 to Infinity word lenght mathc

// !meta character
\d match any digit character (same as [0-9] )
\w match any word character (a-z, A-Z, ,0-9, _)
\s match a whitespace character (space, tabs, newline)
\t match a tab character only

\d{3}\s\w{5}        // matched  // 455	65465

// !special character
+   => the one or more quantifier
/   => the escape character
[]  => the character set
[^] => the negate symbol in a character set
?   => the 0 or more quantifier (makes a preceding char optional)
.   => any character whatsoever (exept the newline character)
*   => the 0 or more quantifier (a bit like +)

abc?   // match // ab or abc   // optional the last character
a.     // match // a- or a...  // after a match any one chacter
.+     // match // match any chacter set
abc*   // match // ab or abc or abcccccc
abc\*  // match // abc* // skip special character on regEx

^[a-z]{6}$  // match // helloo  // match only this in whole string 
^[a-z]{6}  // match // helloo  // match only starting position
[a-z]{6}$  // match // helloo  // match only eding position
ab|cd      // match // ab or cd
(a|b)cd    // match // acd or bcd
aman (khan|silawat)?

*/

// ! two way to create RegExp
var reg = /[a-z]/ig;
var reg2 = new RegExp(/[a-z]/, 'i');