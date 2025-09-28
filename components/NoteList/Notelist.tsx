import { Note } from "@/types/note";
import NoteItem from "../HoteItem/NoteItem";

interface Props {
  items: Note[];
}

const Notelist = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <NoteItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Notelist;
