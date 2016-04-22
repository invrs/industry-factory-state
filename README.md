# IndustryState [![Build Status](https://travis-ci.org/invrs/industry-state.svg?branch=master)](https://travis-ci.org/invrs/industry-state)

Immutable state for your factories.

## Requirements

This extension requires that the factory function returns a stateful object.

## Usage

```js
import { factory } from "industry"
import { instance } from "industry-instance"
import { standard_io } from "industry-standard-io"
import { state } from "industry-state"

class Test {
  init() {
    this.state({ a: 1 })
  }

  a({ state: { a } }) {
    return a
  }
}

let test = factory(Test)
  .set("instance", instance)
  .set("state", state)
  .set("standard_io", standard_io)

test({ b: 2 })
test().state() // { a: 1, b: 2 }
test.a() // { value: 1 }
```
