# _propertyless
## truly propertyless class instances

### Usage:

```
  const _ = require('_propertyless')

  class Foo {
    constructor (param1, param2) {
      Object.assign(_(this), {
        param1,
        param2
      })
    }

    myMethod () {
      const { param1, param2 } = _(this)
    }
  }

Voila!
