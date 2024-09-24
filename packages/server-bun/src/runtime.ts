import type { ProcessEnv, Runtime } from "@goat-rpc/runtime-core";

const processEnv: ProcessEnv = {
  get: (key) => process.env[key],
  set: (key, value) => (process.env[key] = value),
  delete: (key) => delete process.env[key],
  has: (key) => process.env[key] !== undefined,
  toObject: () => {
    let obj: {
      [index: string]: string;
    } = {};
    for (const [key, value] of Object.entries(process.env)) {
      if (value !== undefined) {
        obj[key] = value;
      }
    }
    return obj;
  },
};

export const runtime: Runtime = {
  process: {
    env: processEnv,
  },
};
