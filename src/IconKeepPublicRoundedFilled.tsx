import React from 'react'
import { IconProps } from './types.js'

export const IconKeepPublicRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-320q-17 0-28.5-11.5T120-360v-23q0-8 3-15.5t9-13.5l68-68v-280q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h167q23 0 33 21t-4 41q-18 32-27 66.5t-9 71.5q0 88 49 159t130 102q11 3 18.5 12t7.5 20q0 11-7 19t-18 8H400v234q0 17-11.5 28.5T360-46q-17 0-28.5-11.5T320-86v-234H160Zm480-520q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840Zm0 200q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q25 0 47.5-9.5T727-557q5-6 3.5-13.5T721-582q-19-9-39.5-13.5T640-600q-21 0-41 4.5T559-582q-8 3-9.5 11t3.5 14q17 18 39.5 27.5T640-520Z" />
  </svg>
)
