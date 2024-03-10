import React, { Suspense } from 'react'
import Router from '@src/Router'
import ReactDOM from 'react-dom/client'
import '@sass/main.scss'
import '@src/i18n'
import Loading from '@src/pages/Loading'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  </React.StrictMode>
)
