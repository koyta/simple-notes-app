import * as React from 'react';
import { Popconfirm, Button } from 'antd';
import { ButtonDeleteProps } from '../interfaces';

const ButtonStyle: React.CSSProperties = {
  height: 40,
  width: 'auto'
};

const ButtonDelete = (props: ButtonDeleteProps) => {
  return (
    <Popconfirm placement="bottomRight" title={'Are you wanna remove a note?'} onConfirm={() => { props.removeNote(); }} okText="Yes" cancelText="No" >
      <Button style={ButtonStyle} ghost={false} type="danger">Remove</Button>
    </Popconfirm>
  );
};

export default ButtonDelete;