import { v1 as uuidv1 } from 'uuid'
export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return (
                [...state, {
                    title: action.book.title,
                    auther: action.book.auther,
                    id: uuidv1()
                }]
            )
        case 'REMOVE_BOOK':
            return (
                state.filter((book) => book.id !== action.id)
            )

            break;

        default:
            return state;
    }
}