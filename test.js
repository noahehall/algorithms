const blah = [7,6,5]
let swap;
do {
  swap = false
  for (var i = 0; i < blah.length; i++) {
      if (blah[i] > blah[i + 1]) {
        swap = true;
        let temp = blah[i]
        blah[i] = blah[i+1]
        blah[i+1] = temp;
    }
  }
}
while(swap)

console.log(blah)
