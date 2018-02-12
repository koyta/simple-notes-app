import * as React from 'react';
import './App.css';
import { AppProps } from './interfaces';

import TextInput from './containers/TextInput';
import NotesList from './containers/NotesList';
import DateComponent from './components/Date';
import ButtonDelete from './containers/ButtonDelete';

const App = (props: AppProps) => {
  return (
    <div className="App">
      <NotesList
        notes={props.notes}
        onOpenNote={props.onOpenNote}
        onAddNote={props.onAddNote}
        openNote={props.openNote}
      />
      <div className="edit-note">
        <header>
          <DateComponent notes={props.notes} activeId={props.activeId}/>
          <span className="save">Saved</span>
          <ButtonDelete removeNote={props.onRemoveNote}/>
        </header>
        <TextInput
          notes={props.notes}
          activeId={props.activeId}
          onTextChange={props.onTextChange}
        />
      </div>
    </div>
  );
};

export default App;
