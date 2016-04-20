import { mergeObjects, toObjects } from "standard-io"

export let state = Class =>
  class extends Class {
    constructor(...args) {
      super(...args)
    }

    static beforeFactoryOnce() {
      this.industry({
        ignore: {
          args: [ "state" ],
          instance: [ "state" ]
        }
      })
      super.beforeFactoryOnce()
    }

    beforeInit() {
      let ignore = this.Class.industry().ignore.Class
      for (let name in this.functions()) {
        if (ignore.indexOf(name) == -1) {
          let fn = this[name]
          this[name] = (...args) =>
            fn.bind(this)(...args, { state: this.state() })
        }
      }
      super.beforeInit()
    }

    static factory(...args) {
      if (super.factory) {
        let instance = super.factory(...args)
        instance.state(...args)
        return instance
      }
    }

    state(...args) {
      this._state = mergeObjects(toObjects(args), this._state)

      if (this.updated && args.length) {
        return this.updated()
      } else {
        return this._state
      }
    }
  }
