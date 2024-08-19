import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Redux from "./pages/Redux"
import Layout from "./layout/Layout"
import Account from "./pages/Account"
import Portfolio from "./pages/Portfolio/Portfolio"
import Biography from "./pages/Biography/Biography"
import Homepage from "./pages/Hangman/pages/Homepage"
import OnePlayer from "./pages/Hangman/pages/OnePlayer"
import TwoPlayer from "./pages/Hangman/pages/TwoPlayer/TwoPlayer"
import IFrame from "./pages/Hangman/IFrame/IFrame"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Biography />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
        <Route path="/hangman" element={<Layout />}>
          <Route index element={<IFrame />} />
          {/* <Route path="iframe" element={<HangmanIFrame />}></Route>
          <Route path="one-player" element={<OnePlayer />} />
          <Route path="two-player" element={<TwoPlayer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
