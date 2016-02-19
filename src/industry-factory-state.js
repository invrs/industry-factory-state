import { merge, toObjects } from "./args"

export let factory_state = Class =>
  class extends Class {
    static factory(...args) {
      if (super.factory) {
        let instance = super.factory(...args)
        instance._state = merge(toObjects(args), instance._state)
        return instance
      }
    }

    state(...args) {
      this._state = merge(toObjects(args), this._state)

      if (super.state) {
        return super.state(this._state.toJS())
      } else {
        return this._state.toJS()
      }
    }
  }
