examples.set(
  'new',
  `function is_prime(n)
  if n < 2 return false end
  for i = 2, i < n - 1
    if n % i == 0 return false end
  end
  return true
end

let N = 10
let primes = []

for i = 0, i < N
  if is_prime(i)
    push(primes, i)
  end
end

echo "primes: {primes}"`
)
