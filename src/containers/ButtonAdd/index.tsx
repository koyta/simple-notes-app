import * as React from 'react';
import { NoteElement } from '../../interfaces';
import * as moment from 'moment';
import ButtonAdd from '../../components/ButtonAdd';
import { ButtonAddProps } from '../../interfaces';

export default class ButtonAddContainer extends React.Component <ButtonAddProps, any > {

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
      <ButtonAdd onClickHandle={this.onClickHandle}/>
  );
  }
}