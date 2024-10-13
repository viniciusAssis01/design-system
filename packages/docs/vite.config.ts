/// <reference types="vite/client"/>
//isso acima é para o TS entender q estamos usando o Vite e assim ele liberar alguams tipagens globais q existem dentro do contexto do vite (como o "import.meta")

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
});
