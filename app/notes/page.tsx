/// Client app/notes/page.tsx

// "use client";

// import Notelist from "@/components/NoteList/Notelist";
// import { getNotes } from "@/app/lib/api";
// import { Note } from "@/types/note";
// import { useState } from "react";

// const Notes = () => {
//   const [notes, setNotes] = useState<Note[]>([]);

//   const handleClick = async () => {
//     try {
//       const res = await getNotes();
//       setNotes(res);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Get notes</button>
//       {notes?.length > 0 && <Notelist items={notes} />}
//     </div>
//   );
// };

// export default Notes;

// SSR
// / app/notes/page.tsx

import Notelist from "@/components/NoteList/Notelist";
import { getNotes } from "@/app/lib/api";

const Notes = async () => {
  const notes = await getNotes();

  // console.log("start promise");
  // await new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  // console.log("loaded");

  return <div>{notes?.length > 0 && <Notelist items={notes} />}</div>;
};

export default Notes;
