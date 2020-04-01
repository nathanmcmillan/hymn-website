# Matching

## Enums
```
enum snake
    python
    viper
    cobra

def main
    s = snake.python
    match s
        python: echo("I am a python!")
        viper:  echo("I am a viper!")
        cobra
            echo("I am a cobra!")
            echo("I have venom!")
```

## With Variables
```
enum result
    ok(val int)
    error(message string)

def main
    r = result.error("I am an error!")
    match r
        ok(o) echo(o.val)
        error(e) echo(e.message)
```

## Primitive Match 
```
def main
    c = 'x'
    match c
        '0' | '1' | '2' | '3' |
        '4' | '5' | '6' | '7' |
        '8' | '9': echo("I am a digit!")
        _: pass
```
