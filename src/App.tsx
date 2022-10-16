import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Context } from "./contexts/Context";
import { ShowData } from "./pages/ShowData";
import { SignUp } from "./pages/SignUp";

const App = () => {

  const { state, dispatch } = useContext(Context);


  const handleSwithTheme = () => {
    if(state.theme.status === 'ligth')
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      })

    if(state.theme.status === 'dark')
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'ligth'
        }
      })

  }

  return (
    <BrowserRouter>
      <div style={{backgroundColor: state.theme.status === 'ligth' ? '#fFF' : '#000'}}>
        <h1>Titulo da página</h1>
        <h2>Tema: {state.theme.status}</h2>
        <button onClick={handleSwithTheme}>Switch Theme</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
