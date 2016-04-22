# IndustryState [![Build Status](https://travis-ci.org/invrs/industry-state.svg?branch=master)](https://travis-ci.org/invrs/industry-state)

Immutable state that is updated via factory function or from the instance.

## Requirements

This extension requires that the factory function returns a stateful object.

## Usage

```js
import { factory } from "industry"
import { instance } from "industry-instance"
import { state } from "industry-state"

let test = factory()
  .set("instance", instance)
  .set("state", state)
  .base(class {})

test({ a: 1, b: 2 })
test().state() // { a: 1, b: 2 }
test({ c: 3 }, { d: 4 })
test().state() // { a: 1, b: 2, c: 3, d: 4 }
```
