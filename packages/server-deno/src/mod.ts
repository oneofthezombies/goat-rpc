import { runtime } from "./runtime.ts";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));

  console.log(runtime.process.env.get("A"));
  console.log(Deno.env.get("A"));

  runtime.process.env.set("A", "2");
  console.log(runtime.process.env.get("A"));
  console.log(Deno.env.get("A"));
}
