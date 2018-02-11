import * as React from 'react';
import { Popconfirm, Button } from 'antd';

interface ButtonDeleteProps {
  removeNote(): void;
}

const ButtonStyle: React.CSSProperties = {
  backgroundColor: 'crimson',
  border: 'none',
  boxShadow: 'none',
  width: 40,
  height: 40,
  padding: 0,
  margin: 0,
  color: 'white',
  fontSize: '115%',
  borderRadius: 5,
  textAlign: 'center'
};

export default class ButtonDelete extends React.Component <ButtonDeleteProps, any> {
  render() {
    return (
      <Popconfirm placement="bottomRight" title={'Are you wanna remove a note?'} onConfirm={() => { this.props.removeNote(); }} okText="Yes" cancelText="No">
        <Button style={ButtonStyle}>🗑️</Button>
      </Popconfirm>
    );
  }
}
