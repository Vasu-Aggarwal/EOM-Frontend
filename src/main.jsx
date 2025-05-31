import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClientProvider,
  QueryClient
} from '@tanstack/react-query'
import RootLayout from './RootLayout.jsx'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routing/routeTree.js'

const queryClient = new QueryClient()
const router = createRouter({ routeTree })
createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
)
