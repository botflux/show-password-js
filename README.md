# show-password-js
A library to see what you have typed in a password field.

```js
<script src="/path/to/show-password/index.js"><script>
```

```html
<input type="password" show-input-password="1">
<span data-show-password="1">See</span> 
```

The ID used in `show-input-password` and `data-show-password` need to match.

## Configuration

To override the base configuration, all you need is to pass an object to `ShowPasswordManager` constructor.
```js
new ShowPasswordManager(configuration)
```

|Key|Default value|Description|
|-|-|-|
|`buttonSelector`|`"[data-show-password]"`|The selector that will be used to search all the show buttons
|`inputSelector`|`"[data-input-password]"`|The selector that will be used to search all the password inputs

If you use your own configuration, you still need to use attributes.