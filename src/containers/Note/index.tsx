import * as React from 'react';
import * as moment from 'moment';
import { NoteContainerProps } from '../../interfaces';
import Note from '../../components/Note';

export default class NoteContainer extends React.Component<NoteContainerProps, {}> {

  /**
   * 1) Finding opened note.
   * 2) 1. If exists: remove from it active class
   *    2. If not exists: nothing
   * 3) Adding class to new opened notes
   * 4) Set 'activeId' state to the ID of opened note
   *
   * @param {React.MouseEvent<HTMLLIElement>} e - mouse event
   */
  onClickHandle = (e: React.MouseEvent<HTMLLIElement>) => {
    const activeNote: HTMLLIElement | null = document.querySelector('.note--active') as HTMLLIElement;
    if (activeNote !== null) {
      activeNote.classList.remove('note--active');
    }
    this.props.openNote({
      text: this.props.text,
      title: this.props.title,
      date: moment()
    }, e);
  }

  render() {
    return (
      <Note title={this.props.title} text={this.props.text} onClickHandle={this.onClickHandle}/>
    );
  }
}