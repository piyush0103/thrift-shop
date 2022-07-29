import Home from "./routes/home/home.component";
import UserLogIn from "./routes/authentication/authentication.component"
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Shop from './routes/shop/shop.component'
import Cart from './routes/cart/cart.component'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation></Navigation>}>
      <Route index  element={<Home/>} />
      <Route path="/user-auth"  element={<UserLogIn/>} />
       <Route path="/shop"  element={<Shop/>} />
       <Route path="/cart"  element={<Cart/>} />
      </Route>

     
    </Routes>
 
  );
}

export default App;
