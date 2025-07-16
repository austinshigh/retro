import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import pixel from "./images/SinglePixel.png"
import Layout from "./layout/Layout"
import Desktop from "./pages/Desktop/Desktop"
import Portfolio from "./pages/Portfolio/Portfolio"
import IFrame from "./pages/Windows/IFrame/IFrame"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pixel" element={<img src={pixel} />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Desktop />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
        <Route path="/hangman" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
        <Route path="/scroll" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
        <Route path="/form" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
        <Route path="/search" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
        <Route path="/memo" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
        <Route path="/lazy" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
        <Route path="/drop" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
        <Route path="/resize" element={<Layout />}>
          <Route index element={<IFrame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
