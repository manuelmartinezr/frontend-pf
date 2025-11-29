import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import * as Sentry from "@sentry/react"

const sentryDsn = import.meta.env.VITE_SENTRY_DSN

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    tracesSampleRate: 1.0,
  })
}

createRoot(document.getElementById('root')!).render(
  <App />
)
