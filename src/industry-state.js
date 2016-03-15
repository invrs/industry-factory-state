import { merge, toObjects } from "./args"

export let state = Class =>
  class extends Class {
    constructor(...args) {
      super(...args)
    }

    static factory(...args) {
      if (super.factory) {
        let instance = super.factory(...args)
        instance.state(...args)
        return instance
      }
    }

    state(...args) {
      this._state = merge(toObjects(args), this._state)

      if (this.updated && args.length) {
        return this.updated()
      } else {
        return this._state.toJS()
      }
    }

    stateful(ignore = []) {
      ignore = ignore.concat(
        [ "functions", "include", "standardIO", "state", "stateful" ]
      )

      for (let [ name, fn ] of this.functions().entries()) {
        if (ignore.indexOf(name) == -1) {
          this[name] = (...args) =>
            fn.bind(this)(...args, { state: this.state() })
        }
      }
    }
  }
