import React from 'react';

import { Note } from './components/note';
import { NotesList } from './components/notes-list';
import { NotesNavbar } from './components/navigation';


class App extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <NotesNavbar />
          <NotesList notes={[]} />
        </div>
        <div className="column is-three-quarters content">
          <Note title="Web Notes Application" text=""/>
        </div>
      </div>
    );
  }
}

export default App;
