import * as React from 'react';
import './App.css';
import * as moment from 'moment';
import store from './store/store';

import TextInput from './components/TextInput';
import NotesList from './components/NotesList';
import DateComponent from './components/Date';

interface AppState {
  notes: NoteElement[];
  activeId: number;
  isChanged: boolean;
}

export interface NoteElement {
  title: string;
  text: string;
  date: moment.Moment; // дата последнего изменения
}

const NOTES = 'notes';

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      notes: store.get(NOTES),
      activeId: -1,
      isChanged: false
    };
  }

  /**
   * Set the validation interval for the need to save state to local storage
   */
  componentWillMount() {

    setInterval(
      () => {
        if (this.state.isChanged) {
          store.set(NOTES, this.state.notes);
          this.setState({isChanged: false});
          const save = document.querySelector('.save') as HTMLSpanElement;
          save.classList.add('saved');
          setTimeout(
            () => { save.classList.remove('saved'); },
            1500
          );
        }
      },
      2000);
  }

  /**
   * 1) Add note to the App State.
   * 2) Set {isChanged} -> true (need save to the browser local storage)
   * @param {NoteElement} note - freshly added <NoteElement> object
   */
  onAddNote = (note: NoteElement) => {
    let notes = [...this.state.notes, note];
    this.setState({
      notes,
      isChanged: true
    });
  }

  /**
   * Set {activeId} -> parameter {id}
   * @param {number} id
   */
  onOpenNote = (id: number) => {
    this.setState({
      activeId: id
    });
  }

  /**
   * Any note is opened?
   *  If true:
   *  1) Find opened note.
   *    If finded: remove 'active' class
   *    If not: throw Error
   *  2) Removing note from the App State
   *  3) Set {isChanged} -> true (need save to the browser local storage)
   */
  onRemoveNote = () => {
    const { notes, activeId } = this.state;
    if (activeId !== -1) {
      const activeNote: HTMLLIElement | null = document.querySelector('.note--active') as HTMLLIElement;
      if (activeNote !== null) {
        activeNote.classList.remove('note--active');
      } else {
        throw Error('Note not already finded in document.');
      }
      let updatedNotes = [...notes.slice(0, activeId), ...notes.slice(activeId + 1)];
      this.setState({
        notes: updatedNotes,
        activeId: this.state.notes.length - 1,
        isChanged: true
      });
    }
  }

  /**
   * Trying to save the text changes in real-time to the local storage
   * @param {string} text
   */
  onTextChange = (text: string) => {
    const { notes, activeId } = this.state;
    const time = new Date();

    let updatedNote: NoteElement = notes[activeId];
    updatedNote.text = text;
    updatedNote.date = moment(time);

    let updatedNotes: NoteElement[] = [...notes];
    updatedNotes[activeId] = updatedNote;

    this.setState({
      notes: updatedNotes,
      isChanged: true
    });
  }

  render() {
    return (
      <div className="App">
        <NotesList
          notes={this.state.notes}
          onOpenNote={this.onOpenNote}
          onAddNote={this.onAddNote}
        />
        <div className="edit-note">
          <header>
            <DateComponent notes={this.state.notes} activeId={this.state.activeId}/>
            <span className="save">Saved</span>
            <button type="button" onClick={this.onRemoveNote}>🗑️</button>
          </header>
          <TextInput
            notes={this.state.notes}
            activeId={this.state.activeId}
            onTextChange={this.onTextChange}
          />
        </div>

      </div>
    );
  }
}

export default App;
