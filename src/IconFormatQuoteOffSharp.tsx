import React from 'react'
import { IconProps } from './types.js'

export const IconFormatQuoteOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-56 425-422 320-240h-92l92-160q-66 0-113-47t-47-113q0-27 8.5-51t23.5-44L56-791l56-57 736 736-57 56Zm-55-281L520-553v-7q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480l-82 143ZM320-500q6 0 12-1t11-3l-79-79q-2 5-3 11t-1 12q0 25 17.5 42.5T320-500Zm360 0q25 0 42.5-17.5T740-560q0-25-17.5-42.5T680-620q-25 0-42.5 17.5T620-560q0 25 17.5 42.5T680-500Zm-374-41Zm374-19Z" />
  </svg>
)
