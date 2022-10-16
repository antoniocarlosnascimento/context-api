import { createContext, useReducer } from "react";
import { userReducer, userInitialState, UserType } from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";

// Dados do contexto que irão compor o reducer
type InitialStateType = {
    user: UserType,
}

// Types que vão conter dentro do Context (Visivel a aplicação inteira)
type ContextType = {
    state: InitialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    // Todas as initialStates que tiver
    user: userInitialState,
}

// (state: dados que vão ficar visivel para a app, dispatch: função de acões)
export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = (state: InitialStateType , action: reducerActionType) => ({
    user: userReducer(state.user, action)
});

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}