examples.set('new', `let f = "Fizz"
let b = "Buzz"

function fizzbuzz(n) {
  if n == 0 {
    return
  }

  fizzbuzz(n - 1)

  if n % 15 == 0 {
    echo f + b
  } elif n % 5 == 0 {
    echo b
  } elif n % 3 == 0 {
    echo f
  } else {
    echo n
  }
}

fizzbuzz(20)
`)