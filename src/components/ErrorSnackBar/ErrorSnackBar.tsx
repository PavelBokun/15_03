import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { SetAppErrorAC } from '../../app/app-reducer'
 
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
 
export default function ErrorSnackbar() {
 
    const dispatch = useAppDispatch()
    const error = useAppSelector(state=>state.app.error)
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(SetAppErrorAC(null))

   
  }
  return (
    <Snackbar open={!!error} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  )
}



