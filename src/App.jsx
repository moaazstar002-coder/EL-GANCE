import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import HomePage from './Pages/HomePage'
import CollectionPage from './Pages/CollectionPage'
import JournalPage from './Pages/JournalPage'
import VisitPage from './Pages/VisitPage'
import ShopPage from './Pages/Shop'
import ProductDetails from './Pages/ProductDetails'
import NotFound from './Pages/404_NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fffaf0_0%,_#fbf9f9_36%,_#f4f0ed_100%)] text-[#1b1c1c]">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-8 lg:px-12 lg:py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:slug" element={<ProductDetails />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
