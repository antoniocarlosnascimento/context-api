
import React, { useContext, useState } from 'react';
import { Link  } from "react-router-dom";
import { Context } from '../contexts/Context';

export const SignUp = () => {

    const { state, dispatch } = useContext(Context);

    const [nameInput, setName] = useState(state.user.name);
    const [ageInput, setAgeInput] = useState(state.user.age);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => { setAgeInput(parseInt(e.target.value)) }

    const handleSave = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: nameInput
            }
        });

        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: ageInput
            }
        });
    }

    return(
        <div>
            {/* Tela SignUp de <b>{state.user.name}</b>, idade: <b>{state.user.age}</b> anos */}
            
            <h3>Tela SignUp (Tema: {state.theme.status})</h3>
            <input 
                type="text" 
                placeholder="Digite um nome"
                value={nameInput}
                onChange={handleNameChange}/>

            <br />
            <input 
                type="text" 
                placeholder="Digite a idade"
                value={ageInput}
                onChange={handleAgeChange}/>

            <br />


            <button onClick={handleSave} >Salvar</button>

            <br /><br /><br />
            <button><Link to="/exibir">Ir para ShowData</Link></button>
        </div>
    )
}