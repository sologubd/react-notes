import React, { ReactNode } from "react";
import { Note } from "../types";


type Props = {
  notes: Note[],
}

const NotesList = ({notes}: Props) => {
  return (
    <div>
      {
        notes.map((item) => {
          return <section className="section is-small note-list-ite">
          <h1>{item.title}</h1>
          <div className="note">
            {item.text}
          </div>          
          </section>
        })
      }
    </div>
  )
}

export { NotesList };
