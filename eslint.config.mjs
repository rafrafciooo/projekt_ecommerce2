import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignorowane pliki i foldery
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/lib/generated/**",
      "**/prisma/generated/**",
    ],
  },

  // Główna konfiguracja
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
