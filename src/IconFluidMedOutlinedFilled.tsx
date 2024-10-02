import React from 'react'
import { IconProps } from './types'

export const IconFluidMedOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80q-33 0-56.5-23.5T680-160v-44q-69-14-114.5-68.5T520-400v-200q0-33 23-56.5t57-23.5h240q33 0 56.5 23.5T920-600v200q0 73-45.5 127.5T760-204v44h120v80H760Zm30-360h50v-160H600v80h30q33 0 62.5 15t49.5 41q8 12 21 18t27 6ZM320-60l-80-60v-160h-40q-33 0-56.5-23.5T120-360v-300q-17 0-28.5-11.5T80-700q0-17 11.5-28.5T120-740h120v-60h-20q-17 0-28.5-11.5T180-840q0-17 11.5-28.5T220-880h120q17 0 28.5 11.5T380-840q0 17-11.5 28.5T340-800h-20v60h120q17 0 28.5 11.5T480-700q0 17-11.5 28.5T440-660v300q0 33-23.5 56.5T360-280h-40v220ZM200-360h160v-60h-70q-12 0-21-9t-9-21q0-12 9-21t21-9h70v-60h-70q-12 0-21-9t-9-21q0-12 9-21t21-9h70v-60H200v300Z" />
  </svg>
)
