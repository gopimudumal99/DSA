const a = {}
const b = { key: "b" }
const c = { key: 'c' }
a[b] = 123
a[c] = 456
console.log(a[b])  // O/p : 456


function create(a = b, b) {
  console.log(a);
}
create(undefined, 1);  // reference erro 