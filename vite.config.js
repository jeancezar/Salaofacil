import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // MUITO IMPORTANTE: se seu repo NÃO se chama "salaofacil",
  // troque a string abaixo por '/NOME_DO_SEU_REPO/'
  base: '/salaofacil/',
})
