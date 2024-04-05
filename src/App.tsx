import './App.css'

import ProductsPage from './pages/Products'
import NotFoundPage from './pages/NotFound'
import CreateProductPage from './pages/CreateProduct'
import HomePage from './pages/Home'
import Header from './components/header/Header'
import InitAppEntities from './utils/InitAppEntities'
import SingleProduct from './pages/SingleProduct'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditProduct from './pages/EditProduct'

function App() {
  return (
    <InitAppEntities>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/createProduct' element={<CreateProductPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/product/edit/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </InitAppEntities>
  )
}

export default App
