import * as React from 'react';
import NoteContainer from '../Note';
import { NoteElement, NotesListContainerProps, NotesListContainerState } from '../../interfaces';
import NotesList from '../../components/NotesList';

export default class NotesListContainer extends React.Component<NotesListContainerProps, NotesListContainerState> {

  state = {
    items: this.props.notes
  };

  /**
   * Searching notes by notes text
   * @param {React.ChangeEvent<HTMLInputElement>} e - onChange event for search input value
   */
  filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedList = this.props.notes;
    updatedList = updatedList.filter(item => {
      return item.text.toLowerCase().search(
        e.target.value.toLowerCase()
      ) !== -1;
    });
    this.setState({items: updatedList});
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState({items: nextProps.notes});
  }

  render() {

    let result: JSX.Element[] | null;
    if (this.state.items.length > 0) {
      result = this.state.items.map((note: NoteElement, index) => {
        return (
          <NoteContainer
            key={index}
            title={note.title}
            text={note.text}
            id={index}
            onOpenNote={this.props.onOpenNote}
            openNote={this.props.openNote}
          />);
      });
    } else {
      result = null;
    }

    return (
      <NotesList
        content={result}
        filterList={this.filterList}
        notes={this.props.notes}
        onAddNote={this.props.onAddNote}
        openNote={this.props.openNote}
        onOpenNote={this.props.onOpenNote}
      />
    );
  }
}