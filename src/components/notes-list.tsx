import React, { ReactNode } from "react";
import { INote } from "../types";


type Props = {
  notes: INote[],
}

const NotesList: React.FC<Props> = ({notes}: Props) => {
  return (
    <div>
      {
        notes.map((item) => {
          return <section className="section is-small note-list-item">
          <h1>{item.title}</h1>
          <div className="note">
            {item.text.slice(0, 200)}
          </div>          
          </section>
        })
      }
    </div>
  )
}

export { NotesList };
