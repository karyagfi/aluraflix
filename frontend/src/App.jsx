import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element= {<HomePage />} />
      <Route path="/create" element= {<CreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App