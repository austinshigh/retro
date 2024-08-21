import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./layout/Layout"
import Portfolio from "./pages/Portfolio/Portfolio"
import Biography from "./pages/Biography/Biography"
import IFrame from "./pages/Windows/IFrame/IFrame"
import pixel from "./images/SinglePixel.png"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pixel" element={<img src={pixel} />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Biography />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
        <Route path="/hangman" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
