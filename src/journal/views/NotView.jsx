import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useCheckNote } from '../../hooks/useCheckNote'
import { useDispatch } from 'react-redux'
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal'

export const NotView = () => {

    const dispatch = useDispatch();
    const {body, title, dateString, isSaving, note, onInputChange} = useCheckNote();

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid className='animate__animated animate__fadeIn animate__faster' container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <input type='file' multiple id="btnFile" onChange={onFileInputChange} style={{display:'none'}}/>
                <IconButton color='primary' disabled={isSaving}>
                    <label htmlFor="btnFile">
                        <UploadOutlined/>
                    </label>
                </IconButton>
                <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{padding: 2}}>
                    <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField 
                    type='text' variant='filled' fullWidth placeholder='Ingrese un titulo' 
                    label='Titulo' sx={{border: 'none', mb:1}} 
                    name='title' value={title} onChange={onInputChange}/>
                <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Que sucedio en el día de hoy?' 
                minRows={5} name='body' value={body} onChange={onInputChange}/>
            </Grid>
            <Grid container justifyContent='end'>
                <Button onClick={onDelete} sx={{mt:2}} color='error'>
                    <DeleteOutline/>
                    Borrar
                </Button>
            </Grid>
            {/* Imagenes */}
            <ImageGallery images={note.imageUrls}/>
        </Grid>
    )
}
