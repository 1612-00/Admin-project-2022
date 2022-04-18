import React, { useContext } from 'react';
import './noteElement.scss';
import { NoteContext } from './../../contexts/NoteContext';

const NoteElement = ({ id, text, color, date }) => {
    // Note Context
    const { deleteNote } = useContext(NoteContext);

    const editNote = () => {
        document.getElementById('textarea').value = text;
        for (let i = 0; i < 5; i++) {
            const noteElement = document.getElementById(`note-element-${i}`);
            if (i !== id && noteElement) {
                noteElement.classList.remove('focus');
            }
        }
        document.getElementById(`note-element-${id}`).classList.add('focus');
    };

    const deleteNoteById = () => {
        deleteNote(id);
    };

    return (
        <div id={`note-element-${id}`} className='note-element'>
            <div className={`note-element__color ${color}`}></div>
            <div className='note-element__content'>
                <div className='note-element__content__text'>{text}</div>
                <div className='note-element__content__sub'>
                    <div className='note-element__content__sub__time'>
                        {date}
                    </div>
                    <div className='note-element__content__sub__action'>
                        <div
                            className='note-element__content__sub__action__edit'
                            onClick={editNote}
                        >
                            <i class='bx bx-edit'></i>
                        </div>
                        <div
                            className='note-element__content__sub__action__delete'
                            onClick={deleteNoteById}
                        >
                            <i class='bx bx-trash'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteElement;
