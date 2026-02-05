/// <reference path="./.hoo/types/config.d.ts" />

export default {
  packages: [
    { name: "@clawwatch/core", path: "packages/core", private: true },
    { name: "@clawwatch/tsconfig", path: "tooling/typescript", private: true },
    { name: "@clawwatch/ui", path: "packages/ui", private: true },
    { name: "clawwatch-app", path: "apps/clawwatch", private: true },
  ],
  workers: [],
  images: [
    { name: "infra", image: "", context: "infra", dockerfile: "infra/Dockerfile" },
    { name: "infra-collector", image: "", context: "infra", dockerfile: "infra/Dockerfile.collector" },
  ],
}
