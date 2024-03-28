import {
    SetAppErrorAC,
    SetAppErrorType,
    SetAppStatusAC,
    SetAppStatusType,
  } from '../app/app-reducer'
  import { Dispatch } from 'redux'
  import { ResponseType } from '../api/todolists-api'
   
  type ErrorUtilsDispatchType = Dispatch<SetAppErrorType | SetAppStatusType>
   
  // generic function
  export const handleServerAppError = <T,>(
    data: ResponseType<T>,
    dispatch: ErrorUtilsDispatchType
  ) => {
    if (data.messages.length) {
      dispatch(SetAppErrorAC(data.messages[0]))
    } else {
      dispatch(SetAppErrorAC('Some error occurred'))
    }
    dispatch(SetAppStatusAC('failed'))
  }
   
  export const handleServerNetworkError = (
    error: { message: string },
    dispatch: ErrorUtilsDispatchType
  ) => {
    dispatch(SetAppErrorAC(error.message))
    dispatch(SetAppStatusAC('failed'))
  }
