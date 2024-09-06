import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NotFoundContainer } from './components/NotFoundContainer';
import { Provider } from './contexts/ItemsContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <Provider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}
export default App
