import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // PERBAIKAN: Menambahkan rules kustom global
    rules: {
      // Mematikan error untuk karakter petik tunggal (') di dalam teks
      "react/no-unescaped-entities": "off",
      
      // Mengatur agar variabel yang tidak terpakai hanya memunculkan warning (tidak menggagalkan build)
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }]
    }
  },
  {
    ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"]
  }
];

export default eslintConfig;
