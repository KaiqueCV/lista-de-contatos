import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import GlobalStyle from './styles/globalStyles'
import MyContacts from './pages/MyContacts'
import AddContacts from './pages/AddContacts'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myContacts" element={<MyContacts />} />
        <Route path="/addContacts" element={<AddContacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
