import React from 'react'
import { IconProps } from './types'

export const IconAttachEmailSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-520 120-720v400h400v80H40v-640h800v280h-80v-120L440-520Zm0-80 320-200H120l320 200ZM760-80q-66 0-113-47t-47-113v-180q0-42 29-71t71-29q42 0 71 29t29 71v180h-80v-180q0-8-6-14t-14-6q-8 0-14 6t-6 14v180q0 33 23.5 56.5T760-160q33 0 56.5-23.5T840-240v-160h80v160q0 66-47 113T760-80ZM120-720v-80 480-400Z" />
  </svg>
)
