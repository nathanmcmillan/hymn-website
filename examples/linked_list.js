examples.set('new', `func new-node(value) {
  return { value: value, next: none }
}

func node-add(list, value) {
  set node = list
  while true {
    if node.next == none { break }
    node = node.next
  }
  node.next = new-node(value)
}

set list = new-node("hello")
node-add(list, "world")

echo list
`)