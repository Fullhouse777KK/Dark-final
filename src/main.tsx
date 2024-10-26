import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { register } from 'swiper/element/bundle';
register()
const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
) 
