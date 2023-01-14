import type { Config } from "jest";

const reactMarkdownEsModules = [
  "bail",
  "character-entities",
  "comma-separated-tokens",
  "decode-named-character-reference",
  "hast.+",
  "is-plain-obj",
  "html-void-elements",
  "mdast-.+",
  "merge",
  "micromark",
  "property-information",
  "react-markdown",
  "rehype-raw",
  "remark-.+",
  "space-separated-tokens",
  "trim-lines",
  "trough",
  "unified",
  "unist-.+",
  "vfile",
  "web-namespaces",
  "zwitch",
];

const esModules = [...reactMarkdownEsModules].join("|");

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  displayName: "packages",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  setupFiles: ["jest-plugin-context/setup"],
  transform: {
    "^.+\\.(ts|tsx)?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
      },
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};

export default config;