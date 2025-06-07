import { addNote, getNotes } from "../lib/firebase";
import { useState, useEffect } from "react";


export default function StickyNotes() {

    const [addNoteOpen, setAddNoteOpen] = useState(false);

    const [notes, setNotes] = useState<string[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const notes = await getNotes();
            setNotes(notes);
        }
        fetchNotes();
    }, [addNoteOpen]);
    return (
        <div className="stack:s-2 padded:s-2" style={{ width: "400px", backgroundColor: "white" }}>
            <h3>Sticky Notes</h3>
            {!addNoteOpen && (
                <div className="stack" > 

                    <div className="stack:horizontal" style={{ width: "100%", overflowX: "scroll"}}>
                        {notes.slice().reverse().map((note, index) => (
                            <div key={index} className="stack:s-2 padded:s-2" style={{ minWidth: "100px", height: "100px", backgroundColor: "yellow", display: "flex", fontSize: "12px" }}>
                                <p>{note}</p>
                            </div>
                        ))}
                    </div><div style={{ width: "100%", backgroundColor: "red" }} onClick={() => setAddNoteOpen(true)}>add note</div></div>)}
            {addNoteOpen && <AddNote wasAdded={() => setAddNoteOpen(false)} />}
        </div>
    )
}

const AddNote: React.FC<{ wasAdded: (note: boolean) => void }> = ({ wasAdded }) => {
    const [noteText, setNoteText] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!noteText.trim()) return;

        try {
            // Stub function - replace with actual Firebase call
            addNote(noteText);
            wasAdded(true);
        } catch (error) {
            console.error('Failed to add note:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="stack:s-2">
            <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write your note here..."
                style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    minHeight: "100px",
                    width: "100%"
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#5cb85c",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Add Note
            </button>
        </form>
    );
}