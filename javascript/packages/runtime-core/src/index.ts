export type ProcessEnv = {
  get(key: string): string | undefined;
  set(key: string, value: string): void;
  delete(key: string): void;
  has(key: string): boolean;
  toObject(): { [index: string]: string };
};

export type Runtime = {
  process: {
    env: ProcessEnv;
  };
};
