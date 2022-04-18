import React, { useState, useContext, useEffect } from 'react';
import NoteElement from '../../components/note-element/NoteElement';
import './note.scss';
import { NoteContext } from './../../contexts/NoteContext';

const NoteColorChoose = () => {
    // Note Context
    const { updateColor } = useContext(NoteContext);
    const [currColor, setCurrColor] = useState('purple');

    const changeColor = (color) => {
        setCurrColor(color);
        // Get id of element focus
        const eFocus = document.getElementsByClassName('focus');
        if (eFocus.length !== 0) {
            const idEFocus = eFocus[0].id.split('-')[2];
            updateColor(idEFocus, color);
        }
    };

    return (
        <div className='noteColorChoose'>
            <div
                className={`color-choose__purple`}
                onClick={() => changeColor('purple')}
            >
                <div className={`color-choose__purple__checked`}>
                    {currColor === 'purple' ? (
                        <i class='bx bx-check'></i>
                    ) : (
                        <i class='bx bx-circle'></i>
                    )}
                </div>
            </div>
            <div
                className={`color-choose__green`}
                onClick={() => changeColor('green')}
            >
                <div className={`color-choose__green__checked`}>
                    {currColor === 'green' ? (
                        <i class='bx bx-check'></i>
                    ) : (
                        <i class='bx bx-circle'></i>
                    )}
                </div>
            </div>
            <div
                className={`color-choose__red`}
                onClick={() => changeColor('red')}
            >
                <div className={`color-choose__red__checked`}>
                    {currColor === 'red' ? (
                        <i class='bx bx-check'></i>
                    ) : (
                        <i class='bx bx-circle'></i>
                    )}
                </div>
            </div>
            <div
                className={`color-choose__blue`}
                onClick={() => changeColor('blue')}
            >
                <div className={`color-choose__blue__checked`}>
                    {currColor === 'blue' ? (
                        <i class='bx bx-check'></i>
                    ) : (
                        <i class='bx bx-circle'></i>
                    )}
                </div>
            </div>
            <div
                className={`color-choose__yellow`}
                onClick={() => changeColor('yellow')}
            >
                <div className={`color-choose__yellow__checked`}>
                    {currColor === 'yellow' ? (
                        <i class='bx bx-check'></i>
                    ) : (
                        <i class='bx bx-circle'></i>
                    )}
                </div>
            </div>
        </div>
    );
};

const Note = () => {
    // Note Context
    const {
        noteState: { notes },
        addNote,
        updateNote,
    } = useContext(NoteContext);

    const [isOpen, setIsOpen] = useState(false);
    const [noteArr, setNoteArr] = useState([...notes]);

    const addNewNote = () => {
        const note = {
            id: notes.length,
            text: 'dummy Title',
            color: 'purple',
            date: new Date().toLocaleDateString(),
        };
        addNote(note);
    };

    const updateText = (event) => {
        // Get id of element focus
        const eFocus = document.getElementsByClassName('focus');
        if (eFocus.length !== 0) {
            const idEFocus = eFocus[0].id.split('-')[2];

            updateNote(idEFocus, event.target.value);
        }
    };

    const searchNote = (event) => {
        const noteFilter = notes.filter(
            (note) => note.text.indexOf(event.target.value) !== -1
        );
        setNoteArr(noteFilter);
    };

    useEffect(() => {
        setNoteArr([...notes]);
    }, [notes]);

    return (
        <div className='note'>
            <div className='note__content'>
                <div
                    className={`note__content__wrapper ${
                        isOpen === true ? 'showList' : ''
                    }`}
                >
                    <div className='note__content__wrapper__show'>
                        <div className='note__content__wrapper__show__container'>
                            <div className='note__content__wrapper__show__container__search'>
                                <input
                                    type='text'
                                    className='note__content__wrapper__show__container__search__input'
                                    placeholder='Search Notes...'
                                    onChange={searchNote}
                                />
                            </div>
                            <div className='note__content__wrapper__show__container__list'>
                                {noteArr.length !== 0 ? (
                                    noteArr.map((item, index) => (
                                        <NoteElement
                                            id={item.id}
                                            key={index}
                                            text={item.text}
                                            color={item.color}
                                            date={item.date}
                                        />
                                    ))
                                ) : (
                                    <div>No notes</div>
                                )}
                            </div>
                        </div>
                        <div
                            className='note__content__wrapper__show__btn'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen === false ? (
                                <i class='bx bx-list-ul'></i>
                            ) : (
                                <i class='bx bx-x'></i>
                            )}
                        </div>
                    </div>
                    <div className='note__content__wrapper__custom'>
                        <div className='note__content__wrapper__custom__add'>
                            <button className='add-note' onClick={addNewNote}>
                                Add New Note
                            </button>
                        </div>
                        <div className='note__content__wrapper__custom__change'>
                            <div className='note__content__wrapper__custom__change__edit'>
                                <div className='note__content__wrapper__custom__change__edit__title'>
                                    Edit Note
                                </div>
                                <textarea
                                    id='textarea'
                                    cols='65'
                                    rows='5'
                                    className='note__content__wrapper__custom__change__edit__textarea'
                                    onChange={updateText}
                                ></textarea>
                            </div>
                            <div className='note__content__wrapper__custom__change__color'>
                                <div className='note__content__wrapper__custom__change__color__title'>
                                    Change Note Color
                                </div>
                                <NoteColorChoose />
                            </div>
                        </div>
                        <div className='note-overlay'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Note;
