import { ComponentType } from "preact";

export function island<T extends ComponentType<any>>(
  component: T,
  options = {}
) {
  // In the browser this island function is a no-op and returns the passed
  // component verbatim.
  return component;
}
