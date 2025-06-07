import React from 'react'
import { IconProps } from './types.js'

export const IconIframeOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M818-28 686-160H80v-640h80v114L26-820l57-57L875-85l-57 57ZM160-240h446L206-640h-46v400Zm640-34v-366H434L274-800h606v606l-80-80Zm-80-80L514-560h206v206Z" />
  </svg>
)
