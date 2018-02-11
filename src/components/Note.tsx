import * as React from 'react';

interface NoteProps {
    id: number;
    title: string;
    text: string;
    onOpenNote(id: number): void;
}

class Note extends React.Component<NoteProps, {}> {

    constructor(props: NoteProps) {
        super(props);
    }

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
        e.currentTarget.classList.add('note--active');
        this.props.onOpenNote(this.props.id);
    }

    render() {
        return (
            <li className="note" onClick={(e) => this.onClickHandle(e)}>
                <dl>
                    <dt>{this.props.title}</dt>
                    <dd>{this.props.text.slice(0, 100)}</dd>
                </dl>
            </li>
        );
    }
}

export default Note;