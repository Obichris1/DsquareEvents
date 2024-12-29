
"use client";
import React from 'react'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";


const AppDatePickerProvider = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    {props.children}
  </LocalizationProvider>
  )
}

export default AppDatePickerProvider