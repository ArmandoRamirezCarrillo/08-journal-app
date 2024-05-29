// import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView, NotView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nesciunt quia at ad suscipit iure doloremque maxime eveniet, explicabo architecto distinctio, aliquid voluptate reiciendis accusantium voluptatibus vitae. Magnam, deleniti suscipit.</Typography> */}
      <NothingSelectedView/>
      {/* <NotView/> */}
      <IconButton size='large' 
        sx={{color: 'white', 
          backgroundColor:'error.main', 
          ':hover': {backgroundColor: 'error.main', opacity: 0.9}, 
          position: 'fixed',
          right: 50,
          bottom: 50}}>
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}