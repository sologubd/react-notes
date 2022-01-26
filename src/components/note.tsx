import { type } from "@testing-library/user-event/dist/type";
import React from "react";


type NotesProps = {
  title: string,
  text: string,
}

class Note extends React.Component<NotesProps> {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            {this.props.title}
          </h1>            
          {this.props.text}
        </div>
      </section>
    )
  }
}

export { Note }
export type { NotesProps }
