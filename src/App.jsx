import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import ShopContextProvider from './Context'

function App() {


  

  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <h1>Shoppy Shoppe</h1>
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
      
    </div>
  )
}

export default App
