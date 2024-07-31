import { useDispatch, useSelector } from 'react-redux';
import { useForm } from './useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote } from '../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const useCheckNote = () => {
    const dispatch = useDispatch();
    const {active:note, messageSaved, isSaving} = useSelector(state => state.journal);
    const {body,title, date, onInputChange, formState} = useForm(note);
    const dateString = useMemo(() => {
        return new Date(date).toUTCString();
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
      if(messageSaved.length > 0){
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved])
    

    return {
        body, title, dateString, isSaving,onInputChange
    }
}
