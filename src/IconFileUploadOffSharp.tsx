import React from 'react'
import { IconProps } from './types.js'

export const IconFileUploadOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-800 200 200-56 58-104-104v92l-80-80-63-63 103-103Zm-40 480v-200l80 80v120h-80ZM791-55 686-160H160v-200h80v120h366L55-791l57-57 736 736-57 57Zm9-219-80-80v-6h80v86Z" />
  </svg>
)
