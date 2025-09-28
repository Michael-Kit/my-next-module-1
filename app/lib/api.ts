// lib/api.ts
import { Note } from "@/types/note";
import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
console.log("TOKEN:", token);
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface NoteListResponse {
  notes: Note[];
  total: number;
}

export const getNotes = async () => {
  const { data } = await instance.get<NoteListResponse>("/notes");
  return data.notes;
};

export const getSingleNote = async (id: string) => {
  const { data } = await instance.get<Note>(`/notes/${id}`);
  return data;
};
