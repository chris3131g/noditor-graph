import { DirectedGraph } from "graphology";
import type { EdgeAttributes, NodeAttributes } from "./types.ts";

export function createGraph<
  T extends NodeAttributes,
  V extends EdgeAttributes,
>(): DirectedGraph<T, V> {
  return new DirectedGraph<
    T,
    V
  >();
}
