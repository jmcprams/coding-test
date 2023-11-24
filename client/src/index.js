import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage/HomePage'
import SearchPage from './components/pages/SearchPage/SearchPage'
import CategoryPage from './components/pages/CategoryPage/CategoryPage'
import ProductPage from './components/pages/ProductPage/ProductPage'
import reportWebVitals from './reportWebVitals'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products/:id', element: <ProductPage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/categories', element: <CategoryPage /> }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
