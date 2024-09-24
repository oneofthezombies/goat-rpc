import type { Runtime } from "@goat-rpc/runtime-core";

const a: Runtime = {
  process: {
    env: Deno.env,
  },
};

console.log(a.process.env.get("A"));
console.log(Deno.env.get("A"));

a.process.env.set("A", "2");
console.log(a.process.env.get("A"));
console.log(Deno.env.get("A"));
