export const createBook = (book) => {
    return {
        // uninque identifier
        type: 'CREATE_BOOK',
        // payload
        book: book
    };
};