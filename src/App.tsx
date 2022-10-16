import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from "./contexts/Context";
import { ShowData } from "./pages/ShowData";
import { SignUp } from "./pages/SignUp";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Titulo da página</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
