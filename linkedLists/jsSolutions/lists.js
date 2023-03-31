class SimpleNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const printList = (head) => {
  let list = ''
  while (head) {
    list += ` ${head.val}->`
    head = head.next
  }
  console.log(list)
}

let l1i3 = new SimpleNode(3, null)
let l1i2 = new SimpleNode(4, l1i3)
let l1 = new SimpleNode(2, l1i2)
let l2i3 = new SimpleNode(4, null)
let l2i2 = new SimpleNode(6, l2i3)
let l2 = new SimpleNode(5, l2i2)
let l3i4 = new SimpleNode(9, null)
let l3i3 = new SimpleNode(9, l3i4)
let l3i2 = new SimpleNode(9, l3i3)
let l3 = new SimpleNode(9, l3i2)
let l4i7 = new SimpleNode(9, null)
let l4i6 = new SimpleNode(9, l4i7)
let l4i5 = new SimpleNode(9, l4i6)
let l4i4 = new SimpleNode(9, l4i5)
let l4i3 = new SimpleNode(9, l4i4)
let l4i2 = new SimpleNode(9, l4i3)
let l4 = new SimpleNode(9, l4i2)
let l5 = new SimpleNode(0, null)
let l6 = new SimpleNode(0, null)
let l7i3 = new SimpleNode(9, null)
let l7i2 = new SimpleNode(4, l7i3)
let l7 = new SimpleNode(2, l7i2)
let l8i4 = new SimpleNode(9, null)
let l8i3 = new SimpleNode(4, l8i4)
let l8i2 = new SimpleNode(6, l8i3)
let l8 = new SimpleNode(5, l8i2)
let a5 = new SimpleNode(1, null)
let a4 = new SimpleNode(0, a5)
let a3 = new SimpleNode(0, a4)
let a2 = new SimpleNode(0, a3)
let a1 = new SimpleNode(0, a2)
let z = new SimpleNode(0, a1)
let y = new SimpleNode(0, z)
let x = new SimpleNode(0, y)
let w = new SimpleNode(0, x)
let v = new SimpleNode(0, w)
let u = new SimpleNode(0, v)
let t = new SimpleNode(0, u)
let s = new SimpleNode(0, t)
let r = new SimpleNode(0, s)
let q = new SimpleNode(0, r)
let p = new SimpleNode(0, q)
let o = new SimpleNode(0, p)
let n = new SimpleNode(0, o)
let m = new SimpleNode(0, n)
let l = new SimpleNode(0, m)
let k = new SimpleNode(0, l)
let j = new SimpleNode(0, k)
let i = new SimpleNode(0, j)
let h = new SimpleNode(0, i)
let g = new SimpleNode(0, h)
let f = new SimpleNode(0, g)
let e = new SimpleNode(0, f)
let d = new SimpleNode(0, e)
let c = new SimpleNode(0, d)
let b = new SimpleNode(0, c)
let l9 = new SimpleNode(1, b)
let ac = new SimpleNode(4, null)
let ab = new SimpleNode(6, ac)
let l10 = new SimpleNode(5, ab)


module.exports = {
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, SimpleNode, printList
}