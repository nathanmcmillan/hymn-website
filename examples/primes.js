examples.set('new', `func is-prime(n) {
  if n < 2 { return false }
  for i = 2, i < n - 1 {
    if n % i == 0 { return false }
  }
  return true
}

let N = 10
let primes = []

for i = 0, i < N {
  if is-prime(i) {
    push(primes, i)
  }
}

echo "primes: \${primes}"
`)