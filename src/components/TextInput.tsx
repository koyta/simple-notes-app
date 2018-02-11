import * as React from 'react';
import { NoteElement } from '../App';

interface TextInputProps {
  notes: NoteElement[];
  activeId: number;

  onTextChange(text: string): void;
}

interface TextInputState {
  value: string;
  disabled: boolean;
}

class TextInput extends React.Component<TextInputProps, TextInputState> {

  constructor(props: TextInputProps) {
    super(props);
    this.state = {
      value: '',
      disabled: false
    };
  }

  componentDidMount() {
    this.setState({
      disabled: true
    });
  }

  componentWillReceiveProps(nextProps: TextInputProps) {
    nextProps.notes.length === 0 ? this.setState({disabled: true}) : this.setState({disabled: false});
    const activeNote: HTMLLIElement | null = document.querySelector('.note--active') as HTMLLIElement;
    if (nextProps.activeId !== -1                             // открыл пользователь какую-то заметку или нет
      && activeNote !== null                                  // для тайпскрита
      && nextProps.notes[nextProps.activeId] !== undefined) { // существует ли вообще открытая заметка в массиве заметок
      this.setState({
        value: nextProps.notes[nextProps.activeId].text
      });
      return;
    }
    this.setState({value: ''});

  }

  onChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const {notes, activeId} = this.props;
    // If note exist in notes array
    if (notes[activeId]) {
      this.setState({value: e.currentTarget.value}, () => {
        this.props.onTextChange(this.state.value);
      });
      return;
    }
    // Else
    this.setState({value: ''}, () => {
      this.props.onTextChange(this.state.value);
    });
  }

  render() {
    return (
      <textarea
        value={this.state.value}
        onChange={e => this.onChange(e)}
        disabled={this.state.disabled}
      />
    );
  }
}

export default TextInput;
