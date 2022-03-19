// 초창기의 처음상태 -> 장바구니 처음에는 빈배열
export const initialState = {    
    basket:[],
};

const reducer = (state, action) =>{
    switch(action, type){
    case 'ADD_TO_BASKET' :
        return{
            ...state,
            basket: [...state.basket, action.item],
        };

        default:
            return state;

    }
}

export default reducer;