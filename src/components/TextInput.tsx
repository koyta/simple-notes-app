import * as React from 'react';
import { TextInputProps } from '../interfaces';

const TextInput = (props: TextInputProps) => {
    return (
      <textarea
        value={props.value}
        onChange={e => props.onChange(e)}
        disabled={props.disabled}
      />
    );
};

export default TextInput;
