# Interfaces

```
interface get_and_set
    get() int
    set(int)

class foo implements get_and_set
    x int

def foo.get() int
    return self.x

def foo.set(value int)
    self.x = value

def main
    f = foo(2)
    f.set(3)
    echo(f.get())
```
