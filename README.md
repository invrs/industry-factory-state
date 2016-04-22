# IndustryState [![Build Status](https://travis-ci.org/invrs/industry-state.svg?branch=master)](https://travis-ci.org/invrs/industry-state)

Immutable state for your factories.

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

test = test(class {
  init() {
    this.state({ a: 1 })
  }

  a({ state: { a } }) {
    return a
  }
})

test({ b: 2 })
test().state() // { a: 1, b: 2 }
test.a() // 1
```
