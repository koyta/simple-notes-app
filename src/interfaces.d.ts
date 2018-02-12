import * as moment from 'moment';
import * as React from 'react';

interface AppProps {
  notes: NoteElement[];
  activeId: number;
  onOpenNote(id: number): void;
  openNote(note: NoteElement, e: React.MouseEvent<HTMLLIElement>): void;
  onRemoveNote(): void;
  onAddNote(note: NoteElement): void;
  onTextChange(text: string): void;
}

interface AppContainerState {
  notes: NoteElement[];
  activeId: number;
  isChanged: boolean;
}

interface AppContainerProps {
  store: StoreJsAPI;
}

interface NoteElement {
  title: string;
  text: string;
  date: moment.Moment; // дата последнего изменения
}

interface ButtonAddProps {
  onAddNote(note: NoteElement): void;
}

interface ButtonDeleteProps {
  removeNote(): void;
}

interface NoteContainerProps {
  id: number;
  title: string;
  text: string;
  onOpenNote(id: number): void;
  openNote(note: NoteElement, e: React.MouseEvent<HTMLLIElement>): void;
}

interface NoteProps {
  title: string;
  text: string;
  onClickHandle(e: React.MouseEvent<HTMLLIElement>): void;
}

interface NotesListContainerProps {
  notes: NoteElement[];
  onOpenNote(id: number): void;
  openNote(note: NoteElement, e: React.MouseEvent<HTMLLIElement>): void;
  onAddNote(e: NoteElement): void;
}

interface NotesListContainerState {
  items: NoteElement[];
}

interface NotesListProps extends NotesListContainerProps {
  content: JSX.Element[] | null;
  filterList(e: React.ChangeEvent<HTMLInputElement>): void;
}

interface TextInputContainerProps {
  notes: NoteElement[];
  activeId: number;
  onTextChange(text: string): void;
}

interface TextInputState {
  value: string;
  disabled: boolean;
}

interface TextInputProps {
  value: string;
  disabled: boolean;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export {
  NoteElement,
  ButtonAddProps,
  AppContainerProps,
  AppContainerState,
  AppProps,
  ButtonDeleteProps,
  NoteProps,
  NoteContainerProps,
  NotesListContainerProps,
  NotesListContainerState,
  NotesListProps,
  TextInputContainerProps,
  TextInputState,
  TextInputProps
};