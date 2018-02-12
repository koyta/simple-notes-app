import * as React from 'react';
import { ButtonDeleteProps } from '../../interfaces';
import ButtonDelete from '../../components/ButtonDelete';

export default class ButtonDeleteContainer extends React.Component <ButtonDeleteProps, any> {
  render() {
    return (
      <ButtonDelete removeNote={this.props.removeNote}/>
    );
  }
}