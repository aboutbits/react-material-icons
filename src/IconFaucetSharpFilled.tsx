import React from 'react'
import { IconProps } from './types.js'

export const IconFaucetSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-360v-80h200v-40H160v-80h200v120h80v-276q0-69 48-116.5T605-880q46 0 85 24t60 66l46 92-72 36-46-92q-11-21-31-33.5T604-800q-35 0-59.5 24.5T520-716v276h80v-120h200v80H680v40h200v80H80Zm80 240v-200h640v200H160Z" />
  </svg>
)
