// 초창기의 처음상태 -> 장바구니 처음에는 빈배열
// app전역에서 user에 대한 정보 주고 받기
export const initialState = {    
    basket:[ ],
    user:null,
};

// getBasketTotal은 selector
export const getBasketTotal = (basket) =>(
    basket?.reduce((amount, item)=> item.price + amount, 0)
)

const reducer = (state, action) =>{
    
    switch (action.type){
    case 'ADD_TO_BASKET' :
        return{
            ...state,
            basket: [...state.basket, action.item],
        };

        case 'REMOVE_FROM_BASKET' :
            console.log(state);
            console.log(action);
            const index = state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if(index >=0){
                // splice(제거 시작 인덱스, 제거 개수) -> 원본 배열 수정
                newBasket.splice(index, 1)
            }else{
                console.warn(
                    '(id:' +
                    action.id+
                    ')이 장바구니에 존재하지 않습니다.'
                )
            }

            return {
                ...state,
                basket:newBasket,
            }

            case 'SET_USER' :
                return{
                    ...state,
                    user:action.user,
                }
        default:
            return state;
        }
};

// selector : state에서 필요한 데이터를 가져오거나, 계산을 수행해서 원하는 형태의 데이터를 가져오는 역할.
// reduce 메소드 : 배열의 모든 요소에 대해서 지정된 콜백함수를 호출하는 것. 
export default reducer;