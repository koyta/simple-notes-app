import * as React from 'react';

export interface ButtonAddProps {
  onClickHandle(): void;
}

const ButtonAdd = (props: ButtonAddProps) => {
  return (
    <li className="note note-add" onClick={() => props.onClickHandle()}>📝 Add new note</li>
  );
};

export default ButtonAdd;