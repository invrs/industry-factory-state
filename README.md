# IndustryFactoryState [![Build Status](https://travis-ci.org/invrs/industry-factory-state.svg?branch=master)](https://travis-ci.org/invrs/industry-factory-state)

Allows [Industry](https://github.com/invrs/industry) factory functions to receive one or more objects that update state.

## Requirements

This extension requires that the factory function returns a stateful object.

At Inverse, we usually pair this extension with [IndustryFactoryInstance](https://github.com/invrs/industry-factory-instance).

## Usage

```js
import { factory } from "industry"
import { factory_instance } from "industry-factory-instance"
import { factory_state } from "industry-factory-state"

let test = factory()
  .set("factory_instance", factory_instance)
  .set("factory_state", factory_state)
  .base(class {})

test({ a: 1, b: 2 })
test().state() // { a: 1, b: 2 }
test({ c: 3 }, { d: 4 })
test().state() // { a: 1, b: 2, c: 3, d: 4 }
```
