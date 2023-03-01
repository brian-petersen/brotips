import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import Tip from './Tip'
import { getTip } from './tips'
import { getRandomTipUrl } from './utils'

const router = createBrowserRouter([
  {
    path: "/random",
    loader: () => redirect(getRandomTipUrl()),
  },
  {
    path: "/tips/:id",
    element: <Tip />,
    loader: ({ params: { id } }) => {
      if (!id) {
        return null
      }

      const tipId = Number.parseInt(id)
      const tip = getTip(tipId)

      if (!tip) {
        return null
      }

      return tip
    }
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
