import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";

export const ShowData = () => {
    const { state, dispatch } = useContext(Context);

    const handleChangeName = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'Pedro'
            }
        })
    }

    return(
        <div>
            Tela ShowData <b>{state.user.name}</b>

            <button onClick={handleChangeName}>Trocar nome</button>
            <br /><br /><br />
            <button><Link to="/">Ir para SignUp</Link></button>
        </div>
    )
}