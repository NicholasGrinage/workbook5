let sum = 0;

function add(x, y, z) {
  let sum = x + y + z;
  return sum;
}
function display() {
  console.log(sum);
}

sum = add(1, 2, 3);
sum = add(3, 4, 5);
display();
