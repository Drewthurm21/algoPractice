/* 

Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.
Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.
The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:


drawGift(4, '+')
----
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
----


drawGift(5, '*')
----
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
----


drawGift(1, '^')
----
#
----


Important: We have been told that there is always to leave a newline at the end of the drawing.
*/

/*

  if N is the center line of the gift than (N+1 == N-1) == (N+2 == N-2)

  we can use this to build the lines above and below the center line
  then do the same for the next lines until the box is complete


  we can use a helper function to build the lines above and below the center line
  this function will take the center line and the symbol to use for the faces

*/
function drawGift(size, symbol) {
  const result = [];

  function createLine(spacesBefore, content) {
    result.push(" ".repeat(spacesBefore) + content);
  }

  createLine(size - 1, "#".repeat(size));

  for (let i = 0; i < size - 2; i++) {
    const spaces = size - 2 - i;
    const inner =
      " ".repeat(spaces) +
      "#" +
      symbol.repeat(size - 2) +
      "#" +
      symbol.repeat(i) +
      "#";
    createLine(0, inner);
  }

  if (size > 1) {
    const mid = "#".repeat(size) + symbol.repeat(size - 2) + "#";
    createLine(0, mid);

    for (let i = 0; i < size - 2; i++) {
      const inner =
        "#" + symbol.repeat(size - 2) + "#" + symbol.repeat(size - 3 - i) + "#";
      createLine(0, inner);
    }
  }

  if (size - 2 >= 0)
    createLine(0, [..."#".repeat(size)].reverse().join("").trim());
  result.push("");
  return result.join("\n");
}

console.log(drawGift(4, '+'))
console.log(drawGift(5, '*'))
console.log(drawGift(1, '^'))
console.log(drawGift(10, 'o'))