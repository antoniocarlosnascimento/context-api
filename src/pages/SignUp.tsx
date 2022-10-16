import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../contexts/Context';

export const SignUp = () => {

    const { state, dispatch } = useContext(Context);

    return(
        <div>
            Tela SignUp de <b>{state.user.name}</b>, idade: <b>{state.user.age}</b> anos
            <br /><br /><br />
            <button><Link to="/exibir">Ir para ShowData</Link></button>
        </div>
    )
}