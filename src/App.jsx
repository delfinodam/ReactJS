import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NotFoundContainer } from './components/NotFoundContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App
