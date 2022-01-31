import React from "react";
import { INote } from "../types";


type Props = {
  notes: INote[],
  selectedNoteId: number | null,
  showNote: (id: number) => void,
}

const NotesList: React.FC<Props> = ({notes, selectedNoteId, showNote}: Props) => {
  return (
    <div>
      {
        notes.map((item, id) => {
          const selected = (selectedNoteId === id) ? "selected" : ""
          return (
            <section key={id} className={`section is-small note-list-item ${selected}`}
              onClick={() => showNote(id)}
            >
              <h1>{item.title}</h1>
              <div className="note">
                {item.text.slice(0, 200)}
              </div>          
            </section>
          )        
        })
      }
    </div>
  )
}

export { NotesList };
