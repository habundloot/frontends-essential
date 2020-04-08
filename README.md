# HABUNDLOOT - SCSS LIBRARY

### -> Under Construction <-

Just a small library based on SCSS to
optionally extend bootstrap and start front end developing quick

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

You can find it here - [Mixins/_unitize.scss](Resources/Public/StyleSheets/Mixins/_unitize.scss)

---

```
 @include prefix(attribute, 16px, (pref1 pref2 pref3));
```

will output the following:
```
{
  -pref1-attribute: 16px;
  -pref2-attribute: 16px;
  attribute: 16px;
}
```

You can find it here - [Mixins/_prefix.scss](Resources/Public/StyleSheets/Mixins/_prefix.scss)



