examples.set('new', `function new_node(value) {
  return { value: value, next: none }
}

function node_add(list, value) {
  let node = list
  while true {
    if node.next == none { break }
    node = node.next
  }
  node.next = new_node(value)
}

let list = new_node("hello")
node_add(list, "world")

echo list
`)