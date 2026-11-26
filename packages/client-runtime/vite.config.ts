import "vite-plus/test/config";
import { defineConfig } from "vite-plus";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    // CI runs workspace suites concurrently; 1 MiB text-splitting tests can exceed 5s under load.
    testTimeout: 30_000,
    setupFiles: [
      "../shared/src/testing/longTempDir.ts",
      "../shared/src/testing/providerEnv.ts",
      "../shared/src/testing/gitEnv.ts",
    ],
  },
});
