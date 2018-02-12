import * as React from 'react';
import { NoteProps } from '../interfaces';

const Note = (props: NoteProps) => {

  return (
    <li className="note" onClick={(e) => props.onClickHandle(e)}>
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.text.slice(0, 100)}</dd>
      </dl>
    </li>
  );
};

export default Note;