examples.set('new', `func new-node(value) {
  return { value: value, next: none }
}

func node-add(list, value) {
  let node = list
  while true {
    if node.next == none { break }
    node = node.next
  }
  node.next = new-node(value)
}

let list = new-node("hello")
node-add(list, "world")

echo list
`)