import { factory } from "industry"
import { functions } from "industry-functions"
import { instance } from "industry-instance"
import { standard_io } from "industry-standard-io"
import { state } from "../../"

describe("state", () => {
  let test, id

  function makeTest(id) {
    return factory()
      .set("functions", functions)
      .set("instance", instance)
      .set("standard_io", standard_io)
      .set("state", state)
      .base(class {
        constructor() {
          this.standardIO()
          this.stateful()
          this.id = id
          this.rand = Math.random()
        }

        hello(...args) {
          return args
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

  it("adds state to function input", () => {
    expect(test({ a: 1 }).hello().value[0].state).toEqual({ a: 1 })
  })
})
