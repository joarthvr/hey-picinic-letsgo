/// <reference types="vite/client" />

import '@emotion/react';
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
