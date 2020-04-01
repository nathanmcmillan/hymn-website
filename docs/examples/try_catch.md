# Try + Catch

## Try With Auto Catch
```
enum result
    ok(path string)
    error(message string)

def join(parent string, path string) result
    if path == "": return result.error("path was empty!")
    if parent == "": return result.error("parent was empty!")
    return result.ok(parent + "/" + path)

def work() result
    p = try join("", "bar")
    echo("path: " + p.path)
    return p

def main
    w = work()
    match w: error(e)
        echo(e.message)
        exit(1)
    echo("ok!")
```

## Try With Explicit Catch
```
enum result
    ok(path string)
    error(message string)

def join(parent string, path string) result
    if path == "": return result.error("path was empty!")
    if parent == "": return result.error("parent was empty!")
    return result.ok(parent + "/" + path)

def work() result
    p = try join("", "bar") catch(e)
        return result.error("work exception: " + e.message)
    echo("path: " + p.path)
    return p

def main
    w = work()
    match w: error(e)
        echo(e.message)
        exit(1)
    echo("ok!")
```
