import React, { ReactNode } from "react";
import { NotesProps } from "./note";


type NotesListProps = {
  notes: NotesProps[],
}

class NotesList extends React.Component<NotesListProps> {
  render() {
    return this.props.notes.map((item): ReactNode => {
      return (
        <section className="section is-small note">
          <h1>{item.title}</h1>
          <div className="note">
            {item.text}
          </div>          
        </section>
      )
    })
  }
}

export { NotesList };
