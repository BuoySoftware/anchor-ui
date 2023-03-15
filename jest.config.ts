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

const esModules = [
  ...reactMarkdownEsModules,
  "@buoysoftware/anchor-.+",
  "react-modal",
].join("|");

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  displayName: "packages",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  setupFiles: ["jest-plugin-context/setup"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};

export default config;
