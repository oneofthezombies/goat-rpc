import type { Runtime } from "@goat-rpc/runtime-core";

export const runtime: Runtime = {
  process: {
    env: Deno.env,
  },
};
