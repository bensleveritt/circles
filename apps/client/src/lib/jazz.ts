import { createJazzApp } from "jazz-svelte";
import { CircleAccount } from "./schema";

export const { Provider, useCoState, useAccount } = createJazzApp({
  AccountSchema: CircleAccount,
});
