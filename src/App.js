import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component"
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation></Navigation>}>
      <Route index  element={<Home/>} />
      <Route path="/sign-in"  element={<SignIn/>} />
      </Route>
      {/* <Home></Home> */}
    </Routes>
  );
}

export default App;
