import { createContext, useContext, useReducer } from "react";

// data layer 준비
export const StateContext = createContext();


// app을 wrapping해서 data layer을 제공하는 부분
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider>
);


// data layer에서 정보 가져오는 메소드
export const useStateValue = ()=>useContext(StateContext);

// App을 data layer로 감싸줘야 함.