import * as React from 'react';
import ButtonAdd from '../containers/ButtonAdd';
import { Input } from 'antd';
import { NotesListProps } from '../interfaces';

const Search = Input.Search;
const SearchClass: React.CSSProperties = {
  width: 'calc(100% - 10px)',
  margin: '5px'
};

// class NotesList extends React.Component<NotesListProps, NotesListState> {
//
//   state = {
//     items: this.props.notes
//   };
//
//   filterList = (e: ChangeEvent<HTMLInputElement>) => {
//     let updatedList = this.props.notes;
//     updatedList = updatedList.filter(item => {
//       return item.text.toLowerCase().search(
//         e.target.value.toLowerCase()
//       ) !== -1;
//     });
//     this.setState({items: updatedList});
//   }
//
//   componentWillReceiveProps(nextProps: any) {
//     this.setState({items: nextProps.notes});
//   }
//
//   render() {
//     let result: JSX.Element[] | null;
//     if (this.state.items.length > 0) {
//       result = this.state.items.map((note: NoteElement, index) => {
//         return (
//           <NoteContainer
//             key={index}
//             title={note.title}
//             text={note.text}
//             id={index}
//             onOpenNote={this.props.onOpenNote}
//             openNote={this.props.openNote}
//           />);
//       });
//     } else {
//       result = null;
//     }
//
//     return (
//       <div className="notes-container">
//         <ul className="notes-list">
//           <Search
//             placeholder={'Filter by text in note'}
//             onChange={e => this.filterList(e)}
//             style={SearchClass}
//           />
//           <ButtonAdd onAddNote={this.props.onAddNote}/>
//           {content}
//         </ul>
//       </div>
//     );
//   }
// }

const NotesList = (props: NotesListProps) => {
  return (
      <div className="notes-container">
        <ul className="notes-list">
          <Search
            placeholder={'Filter by text in note'}
            onChange={e => props.filterList(e)}
            style={SearchClass}
          />
          <ButtonAdd onAddNote={props.onAddNote}/>
          {props.content}
        </ul>
      </div>
    );
};

export default NotesList;
