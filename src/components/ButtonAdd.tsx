import * as React from 'react';
import { NoteElement } from '../App';
import * as moment from 'moment';

export interface ButtonAddProps {
    onAddNote(note: NoteElement): void;
}

export default class ButtonAdd extends React.Component < ButtonAddProps, any > {

  /**
   * 1) Asking user for the new title (default: 'Unnamed') using propmt modal window.
   * 2) Creating the new <NoteElement> with a new title. Updating a date of the last change.
   * 3) Push already created Note object to the App State.
   */
  onClickHandle = () => {
        let newTitle: string | null = prompt('Enter note title', 'Без имени');
        if (newTitle === null || newTitle === '') {
            newTitle = 'Без имени';
        }

        const newNote: NoteElement = {
            title: newTitle,
            text: '',
            date: moment(new Date())
        };
        this.props.onAddNote(newNote);
    }

    render() {
        return (
            <li className="note note-add" onClick={() => this.onClickHandle()}>📝 Add new note</li>
        );
    }
}