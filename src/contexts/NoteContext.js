import { createContext, useReducer } from 'react';
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './constant';
import { noteReducer } from './../reducers/NoteReducer';

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
    const [noteState, dispatch] = useReducer(noteReducer, {
        notes: [],
    });

    const addNote = (note) => {
        try {
            dispatch({ type: ADD_NOTE, payload: note });
        } catch (error) {
            console.log(error);
        }
    };

    const deleteNote = (id) => {
        try {
            dispatch({ type: DELETE_NOTE, payload: id });
        } catch (error) {
            console.log(error);
        }
    };

    const updateNote = (id, text) => {
        const noteUpdate = noteState.notes[id];
        noteUpdate.text = text;

        try {
            dispatch({ type: UPDATE_NOTE, payload: noteUpdate });
        } catch (error) {
            console.log(error);
        }
    };

    const updateColor = (id, color) => {
        const noteUpdate = noteState.notes[id];
        noteUpdate.color = color;

        try {
            dispatch({ type: UPDATE_NOTE, payload: noteUpdate });
        } catch (error) {
            console.log(error);
        }
    };

    const NoteContextData = {
        noteState,
        addNote,
        deleteNote,
        updateNote,
        updateColor,
    };

    return (
        <NoteContext.Provider value={NoteContextData}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContextProvider;
