import React from 'react'
import { IconProps } from './types.js'

export const IconFluidMedSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-80q-33 0-56.5-23.5T680-160v-44q-69-14-114.5-68.5T520-400v-280h400v280q0 73-45.5 127.5T760-204v44h120v80H760Zm30-360h50v-160H600v80h30q33 0 62.5 15t49.5 41q8 12 21 18t27 6Zm-70 160q39 0 70-22.5t43-57.5h-43q-33 0-62.5-14.5T678-416q-9-11-21.5-17.5T630-440h-30v40q0 51 34.5 85.5T720-280Zm-42-184ZM320-60l-80-60v-160h-40q-33 0-56.5-23.5T120-360v-300H80v-80h160v-60h-60v-80h200v80h-60v60h160v80h-40v300q0 33-23.5 56.5T360-280h-40v220ZM200-360h160v-60H260v-60h100v-60H260v-60h100v-60H200v300Z" />
  </svg>
)
