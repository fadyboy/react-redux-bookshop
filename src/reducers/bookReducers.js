export default (state = [], action) => {
    switch (action.type){
        // check if action is CREATE_BOOK  and act on that
        case 'CREATE_BOOK':
            return [
                ...state,
                Object.assign({}, action.book)
            ];

        default:
            return state;

    }
};