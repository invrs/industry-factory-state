import Immutable from "immutable"

export function merge(args, state = Immutable.Map()) {
  return args.reduce(
    (current, arg) => { return current.merge(arg) },
    state
  )
}

export function toObjects(args) {
  return args.filter(
    item => (item && !item.then) && typeof item == "object"
  )
}
