import { Route, Routes } from "react-router"
import "./style.css"
import TournamentList from "./pages/tournament-list"
import TournamentDetail from "./pages/tournament-detail"
import TournamentEdit from "./pages/tournament-edit"
import TournamentAdd from "./pages/tournament-add"

function App() {

  return (
    <div>
      <h1 class="text-center bg-red-200">Hello world</h1>

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
