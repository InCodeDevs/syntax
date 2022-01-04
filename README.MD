
# @incodelang/syntax-highlighting

This package allows you to highlight a custom programming language on a website.


## Installation

Install @incodelang/syntax-highlighting with npm

```bash
  npm install @incodelang/syntax-highlighting
```

Install @incodelang/syntax-highlighting with yarn

```bash
  yarn add @incodelang/syntax-highlighting
```

## Usage/Examples

```javascript
import highlight from '@incodelang/syntax-highlighting'

highlight(
    document.querySelector("code"),
    [
        {
            name: "fn-call",
            match: /x/,
            style: {
                color: '#FFF'
            }
        },
        {
            name: "fn-call2",
            match: /y/,
            style: {
                color: '#222'
            }
        }
        {
            name: "fn-call3",
            match: /z/,
            style: {
                color: '#333'
            }
        }
    ]
)
```


Each pattern name will generate a CSS-Class with the exact same name and the corresponding style properties.
So you can set custom style properties using

```css
.your-papper-name {
    your-css-prop: your-css-value
}
```

Example:
```css
.fn-call {
    line-height: 1.6;
}
```
## License

[GNU General Public License 3.0 only](https://choosealicense.com/licenses/gpl-3.0/)

