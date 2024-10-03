import React from 'react'
import { IconProps } from './types.js'

export const IconKeepPublicSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-40-40-40v-240H120v-80l80-80v-280h-40v-80h285q-41 40-63 91.5T360-640q0 105 68.5 183.5T600-363v43H400v240l-40 40Zm280-400q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Zm0-200q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q31 0 56.5-14.5T739-573q-22-13-47-20t-52-7q-27 0-52 7t-47 20q17 24 42.5 38.5T640-520Z" />
  </svg>
)
