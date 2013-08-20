# tabOverride.escape

Escape extension for [Tab Override](https://github.com/wjbryant/taboverride) 4.0+

This extension makes the Escape key temporarily disable Tab Override. It is
re-enabled once the textarea is blurred (loses focus).

## Usage

### Enable/Disable

The extension is enabled by default.

```javascript
// get the current setting
var escapeEnabled = tabOverride.escape();
```

```javascript
// enable the extension
tabOverride.escape(true);
```

```javascript
// disable the extension
tabOverride.escape(false);
```