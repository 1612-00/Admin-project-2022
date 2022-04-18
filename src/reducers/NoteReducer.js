import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './../contexts/constant';
export const noteReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, payload],
            };

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== payload),
            };

        case UPDATE_NOTE:
            const newNotes = state.notes.map((note) =>
                note.id === payload.id ? payload : note
            );
            return {
                ...state,
                notes: newNotes,
            };

        default:
            return state;
    }
};
