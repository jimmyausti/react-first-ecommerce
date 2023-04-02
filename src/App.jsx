import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import ShopContextProvider from './Context'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
  const client = new QueryClient()

return (
    <div className="App">
      <QueryClientProvider client={client}>
      <ShopContextProvider>
      <Router>
        <Navbar />
        <h1>Shoppy Shoppe</h1>
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/shop/products/:id' element={<ProductDetails />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
      </QueryClientProvider>
      
    </div>
  )
}

export default App
