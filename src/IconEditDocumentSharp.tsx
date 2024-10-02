import React from 'react'
import { IconProps } from './types'

export const IconEditDocumentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-80v-123l263-262 123 122L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM160-80v-800h400l240 240v120h-80v-80H520v-200H240v640h240v80H160Zm360-400Zm241 199-19-18 37 37-18-19Z" />
  </svg>
)
