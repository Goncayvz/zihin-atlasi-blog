import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: '#fff',
            color: '#4a044e',
            border: '1px solid #d8b4fe',
            borderRadius: '12px',
          },
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative">
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #c084fc 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kategori/:kategoriId" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App