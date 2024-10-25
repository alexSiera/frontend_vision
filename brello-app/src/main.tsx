import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import './index.css'
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
//import "@mantine/hooks/styles.css";
//import "@mantine/modals/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
)
