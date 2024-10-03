import React from 'react'
import { IconProps } from './types.js'

export const IconKitesurfingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-40v-80h40q32 0 62.5-10t57.5-30q26 18 55 28t60 11q33 1 65-9t60-30q26 19 57 29t63 10q32 0 62-9.5t58-29.5q28 20 58.5 30t61.5 10h40v80h-40q-31 0-61-7.5T720-70q-29 15-58.5 22.5T600-40q-31 0-61-7.5T480-70q-29 16-61 23.5T355-40q-30-1-59-8.5T240-70q-29 15-58.5 22.5T120-40H80Zm280-160q-26 0-51.5-10T260-240q14-11 29-23t31-23l-62-119q-9-17-13.5-36t-4.5-39v-160q0-33 23.5-56.5T320-720h120q40 0 76.5-15t65.5-43l56 56q-41 40-92 61t-106 21h-56v140h112l68 75q65-27 115.5-41t86.5-14q35 0 54.5 13.5T840-429q0 39-54 98.5T638-206q-9 3-18.5 4.5T600-200q-32 0-64-15.5T480-260q-24 29-55.5 44.5T360-200Zm33-136q16-10 46-27t49-26l-28-31-100 4 33 80Zm-73-424q-33 0-56.5-23.5T240-840q0-33 23.5-56.5T320-920q33 0 56.5 23.5T400-840q0 33-23.5 56.5T320-760Zm342-20-42-42 98-98h84L662-780Z" />
  </svg>
)
