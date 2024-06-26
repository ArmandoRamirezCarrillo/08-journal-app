import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './';
import { loadNotes } from '../../helpers';

export const startNewNote = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewNote());
        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };
        collection(firebaseDB, 'users');
        const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc,newNote);
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe');
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}