import { CodegenConfig } from "@graphql-codegen/cli";

export const CODEGEN_OUPUT_FILE = "types.ts";

const config: CodegenConfig = {
  debug: true,
  verbose: true,
  config: {
    maybeValue: "T | undefined",
  },
  schema: process.env.PUBLIC_CMS_ENDPOINT,
  documents: "document.graphql",
  generates: {
    [CODEGEN_OUPUT_FILE]: {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
      },
    },
  },
  hooks: {
    // onError passes error string to the console.error directly
    onError: console.error,
  },
};

export default config;
