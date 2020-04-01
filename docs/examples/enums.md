# Enums

```
enum snake
    python
    viper
    cobra

def main
    s = snake.python
    echo(s)
```

## With Variables
```
enum number
    discrete(f int)
    real(r float)

def main
    n = num.discrete(8)
    echo(n.f)
```

## With Generics
```
enum result<a,b>
    ok(value a)
    error(value b)

def main
    r = result<int,float>.ok(4)
    echo(r.value)
```
