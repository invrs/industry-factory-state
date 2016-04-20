# IndustryState [![Build Status](https://travis-ci.org/invrs/industry-state.svg?branch=master)](https://travis-ci.org/invrs/industry-state)

Allows [Industry](https://github.com/invrs/industry) factory functions to receive one or more objects that update state.

## Requirements

This extension requires that the factory function returns a stateful object.

At Inverse, we usually pair this extension with [IndustryFactoryInstance](https://github.com/invrs/industry-instance).

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
