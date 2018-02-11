import * as React from 'react';
import Note from './Note';
import { NoteElement } from '../App';
import ButtonAdd from './ButtonAdd';
import { Input } from 'antd';
import { ChangeEvent } from 'react';

const Search = Input.Search;

const SearchClass: React.CSSProperties = {
  width: 'calc(100% - 10px)',
  margin: '5px'
};

interface NotesListProps {
  notes: NoteElement[];

  onOpenNote(id: number): void;

  onAddNote(e: NoteElement): void;
}

interface NotesListState {
  items: NoteElement[];
}

class NotesList extends React.Component<NotesListProps, NotesListState> {

  state = {
    items: this.props.notes
  };

  componentWillReceiveProps(nextProps: any) {
    this.setState({items: nextProps.notes});
  }

  filterList = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedList = this.props.notes;
    updatedList = updatedList.filter(item => {
      return item.text.toLowerCase().search(
        e.target.value.toLowerCase()
      ) !== -1;
    });
    this.setState({items: updatedList});
  }

  render() {
    let result: JSX.Element[] | null;
    if (this.state.items.length > 0) {
      result = this.state.items.map((note: NoteElement, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            text={note.text}
            id={index}
            onOpenNote={this.props.onOpenNote}
          />);
      });
    } else {
      result = null;
    }

    return (
      <div className="notes-container">
        <ul className="notes-list">
          <Search
            placeholder={'Filter by text in note'}
            onChange={e => this.filterList(e)}
            style={SearchClass}
          />
          <ButtonAdd onAddNote={this.props.onAddNote}/>
          {result}
        </ul>
      </div>
    );
  }
}

export default NotesList;
