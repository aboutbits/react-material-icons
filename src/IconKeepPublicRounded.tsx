import React from 'react'
import { IconProps } from './types'

const IconKeepPublicRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M365-580Zm-45 260H160q-17 0-28.5-11.5T120-360v-23q0-8 3-15.5t9-13.5l68-68v-280q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h180q17 0 28.5 11.5T420-800q0 17-11.5 28.5T380-760H280v281q0 16-6 30.5T257-423l-23 23h286q17 0 28.5 11.5T560-360q0 17-11.5 28.5T520-320H400v234q0 17-11.5 28.5T360-46q-17 0-28.5-11.5T320-86v-234Zm320-120q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Zm0-200q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q25 0 47.5-9.5T727-557q5-6 3.5-13.5T721-582q-19-9-39.5-13.5T640-600q-21 0-41 4.5T559-582q-8 3-9.5 11t3.5 14q17 18 39.5 27.5T640-520Z" />
  </svg>
)

export { IconKeepPublicRounded as default }