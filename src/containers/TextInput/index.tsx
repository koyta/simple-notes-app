import * as React from 'react';
import { TextInputContainerProps, TextInputState } from '../../interfaces';
import TextInput from '../../components/TextInput';

export default class TextInputContainer extends React.Component<TextInputContainerProps, TextInputState> {

  constructor(props: TextInputContainerProps) {
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

  componentWillReceiveProps(nextProps: TextInputContainerProps) {
    nextProps.notes.length === 0 ? this.setState({disabled: true}) : this.setState({disabled: false});
    const activeNote: HTMLLIElement | null = document.querySelector('.note--active') as HTMLLIElement;
    if (nextProps.activeId !== -1                             // открыл пользователь какую-то заметку или нет
      && activeNote !== null                                  // для тайпскрита
      && nextProps.notes[nextProps.activeId] !== undefined) { // существует ли вообще открытая заметка в массиве заметок
      this.setState({
        value: nextProps.notes[nextProps.activeId].text
        // value: nextProps.openedNote.text
      });
      return;
    }
    this.setState({value: ''});
  }

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <TextInput
        disabled={this.state.disabled}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}