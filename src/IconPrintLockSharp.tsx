import React from 'react'
import { IconProps } from './types'

const IconPrintLockSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-120v-200h40v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM160-560h640-640Zm80 440v-160H80v-360h800v150q-18-10-38-17t-42-10v-43H160v200h80v-80h340q-16 17-29 37t-21 43H320v160h204q7 22 17 42t24 38H240Zm400-520v-120H320v120h-80v-200h480v200h-80Z" />
  </svg>
)

export { IconPrintLockSharp as default }
