# fqs

Pretty-print query strings and hash fragments in a human-readable, copy-pasteable format

## Installation

```
npm install -g fqs
```

## Usage

```
$ fqs https://example.com/foo?d=3&c=2#b=1&a=0
https://example.com/foo?
c=2
d=3
#a=0
b=1
```

Output from `fqs` can be pasted directly to a browser's address bar.
