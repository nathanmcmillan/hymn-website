examples.set('new', `set f = "Fizz"
set b = "Buzz"

func fizz-buzz(n) {
  if n == 0 {
    return
  }

  fizz-buzz(n - 1)

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

fizz-buzz(20)
`)