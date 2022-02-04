examples.set(
  'new',
  `function new_node(value)
  return { value: value, next: none }
end

function node_add(list, value)
  let node = list
  while true
    if node.next == none break end
    node = node.next
  end
  node.next = new_node(value)
end

let list = new_node("hello")
node_add(list, "world")

echo list`
)
