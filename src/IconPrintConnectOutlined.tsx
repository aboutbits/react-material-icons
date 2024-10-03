import React from 'react'
import { IconProps } from './types.js'

export const IconPrintConnectOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-560h640-640Zm80 440v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v30q-18-10-38-17t-42-10v-3q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h340q-16 17-29 37t-21 43H320v160h204q7 22 17 42t24 38H240Zm478-33L604-266l57-56 57 56 141-141 57 56-198 198Zm-78-487v-120H320v120h-80v-200h480v200h-80Z" />
  </svg>
)
