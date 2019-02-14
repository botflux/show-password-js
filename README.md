# show-password-js
A library to see what you have typed in a password field.

```js
<script src="/path/to/show-password.js"><script>
```

```html
<input type="password" data-input-password="1">
<span data-show-password="1">See</span> 
```

The ID used in `data-input-password` and `data-show-password` need to match.

## Configuration

If you want to override the configuration of show-password you need need to exclude it using your package manager.
To override the base configuration, all you need is to pass an object to `ShowPasswordManager` constructor.
```js
new ShowPasswordManager(configuration)
```

|Key|Default value|Description|
|-|-|-|
|`buttonSelector`|`"[data-show-password]"`|The selector that will be used to search all the show buttons
|`inputSelector`|`"[data-input-password]"`|The selector that will be used to search all the password inputs

If you use your own configuration, you still need to use attributes.

## References

```js
import ShowPasswordManager from 'show-password.js'

// default config
new ShowPasswordManager()
new ShowPasswordManager({ buttonSelector: '[input-selector]', inputSelector: '[input-selector]' })
```
