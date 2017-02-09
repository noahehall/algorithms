/**
 * adds two numbers and returns the result
 * addition algorithm
 * @see Algorithms_in_a_Nutshell_Second_Edition
 */
export default function plus (
  one, // 10 === [1,0]
  two,
  sum = [],
) {
  const n1 = String(one).split('').map(n => +n), n2 = String(two).split('').map(n => +n);

  let
    position1 = n1.length,
    position2 = n2.length,
    max = Math.max(position1, position2) - 1,
    carry = 0;

  while (--position1 >=0 && --position2 >= 0) {
    let total = n1[position1] + n2[position2] + carry;
    if (total > 9) {
      sum[max] = total -10;
      carry = 1;
    } else {
      sum[max] = total;
      carry = 0;
    }
    max--;
  }
  if (position1 !== 0) {
    sum.unshift(n1.slice(0, position1 - 1))
  };
  else if (position2 !== 0) {
    sum.unshift(n2.slice(0, position - 1))
  };
  sum[max] = carry;
  return [sum.join(), position1, position2, max, carry, n1, n2];
}