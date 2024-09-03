import React from 'react'
import { IconProps } from './types'

const IconKeepPublicSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M365-580Zm-5 540-40-40v-240H120v-80l80-80v-280h-40v-80h285q-18 17-32.5 37T387-760H280v314l-46 46h263q24 14 49.5 23.5T600-363v43H400v240l-40 40Zm280-600q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q31 0 56.5-14.5T739-573q-22-13-47-20t-52-7q-27 0-52 7t-47 20q17 24 42.5 38.5T640-520Zm0 80q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Z" />
  </svg>
)

export { IconKeepPublicSharp as default }