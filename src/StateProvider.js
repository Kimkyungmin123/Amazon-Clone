import  React,{ createContext, useContext, useReducer } from "react";

// data layer 생성
export const StateContext = createContext();


// app을 wrapping해서 data layer을 제공
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </StateContext.Provider>
);


// data layer에서 정보 가져오는 메소드 설정
// 매개체 역할 (각 컴포넌트 주고받기 위함)
// 이 코드를 import해줘야 StateProvider.js와 reducer.js를 포함한 정보전달이 가능해짐.
export const useStateValue = ()=>useContext(StateContext);

// App을 data layer로 감싸줘야 함.