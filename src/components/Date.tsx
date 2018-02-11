import * as React from 'react';
import { NoteElement } from '../App';
import * as moment from 'moment';
import * as store from 'store';

interface AppProps {
    notes: NoteElement[];
    activeId: number;
}

export default class App extends React.Component<AppProps, any> {

  render() {
    let result: JSX.Element;

    if (store.get('notes')[this.props.activeId]) {
      result = <p>{moment(store.get('notes')[this.props.activeId].date).fromNow()}</p>;
    } else {
      result = <p>&nbsp;</p>;
    }

    return (
      <div>
          {result}
      </div>
    );
  }
}
