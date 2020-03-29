# Classes

```
class vec
    x float
    y float
    z float

def main
    v = vec(2, 3, 5)
    echo(v.x, v.y, v.z)
```

## With Generics
```
class foo<t>
    x t
    y t

def main
    f = foo("Hello", "World!")
    echo(f.x, f.y)
```
