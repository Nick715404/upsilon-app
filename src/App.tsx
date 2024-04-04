import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductsPage from './pages/Products'
import NotFoundPage from './pages/NotFound'
import CreateProductPage from './pages/CreateProduct'
import HomePage from './pages/Home'
import Header from './components/header/Header'
import InitAppEntities from './utils/InitAppEntities'

function App() {



  return (
    <>
      <InitAppEntities>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/createProduct' element={<CreateProductPage />} />
            <Route path='/products' element={<ProductsPage />} >
              <Route path='/products/:id' />
            </Route>
          </Routes>
        </BrowserRouter>
      </InitAppEntities>
    </>
  )
}

export default App
