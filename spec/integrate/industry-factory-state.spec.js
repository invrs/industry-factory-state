import { factory } from "industry"
import { factory_instance } from "industry-factory-instance"
import { factory_state } from "../../"

describe("factory_state", () => {
  let test, id

  function makeTest(id) {
    return factory()
      .set("factory_instance", factory_instance)
      .set("factory_state", factory_state)
      .base(class {
        constructor() {
          this.id = id
          this.rand = Math.random()
        }
      })
  }

  beforeEach(() => {
    id = Math.random()
    test = makeTest(id)
  })

  it("sets state from the factory function", () => {
    expect(test({ a: 1 }, { b: 2 }).state()).toEqual({ a: 1, b: 2 })
  })

  it("sets state from the state function", () => {
    expect(test({ a: 1 }).state({ a: 2 }, { b: 1 })).toEqual({ a: 2, b: 1 })
  })

  it("works in an empty state", () => {
    expect(test().state()).toEqual({})
  })

  it("retains state", () => {
    expect(test({ a: 1 }).state()).toEqual({ a: 1 })
    expect(test({ b: 2 }).state()).toEqual({ a: 1, b: 2 })
  })
})