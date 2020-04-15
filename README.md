# HABUNDLOOT - SCSS LIBRARY

### -> Under Construction <-

Just a small library based on SCSS to
optionally extend bootstrap and start frontend developing!

### Webpack:
Please just work in the Resources/Private/src folder.<br>
The Resources/Public/dist folder serves the minified project
ready files.

To start compiling just fire
```
 npm run build
```

in the terminal. This will execute the webpack and store the
new files in the Resources/Public/dist.

To make webpack watch the project an compile on changes hit
```
 npm run build --watch
```

### Includes:

---

```
 @include unitize(attribute, 16px);
```

will output the following:
```
{
  attribute: 16px;
  attribute: 1rem;
}
```

You can find it here - [Mixins/_unitize.scss](Resources/Private/src/StyleSheets/Mixins/_unitize.scss)

---



