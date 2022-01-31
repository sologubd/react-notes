import React from "react";

import { INote } from "../types";


type Props = {
  note: INote,
}

const Note: React.FC<Props> = ({note}) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          {note.title}
        </h1>
        {note.text}
      </div>
    </section>
  )
}

export { Note }
