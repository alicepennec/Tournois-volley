import { Route, Routes } from "react-router";
import "./style.css";
import TournamentList from "./pages/tournament-list";
import TournamentDetail from "./pages/tournament-detail";
import TournamentEdit from "./pages/tournament-edit";
import TournamentAdd from "./pages/tournament-add";
import PageNotFound from "./pages/page-not-found";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <Routes>
        <Route path='/' element={<TournamentList />} />
        <Route path='/tournaments' element={<TournamentList />} />
        <Route path='/tournaments/:id' element={<TournamentDetail />} />
        <Route path='/tournaments/edit/:id' element={<TournamentEdit />} />
        <Route path='/tournaments/add' element={<TournamentAdd />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
