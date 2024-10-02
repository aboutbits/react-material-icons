import React from 'react'
import { IconProps } from './types'

export const IconEmojiFoodBeverageSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80h640v80H160Zm0-160v-560h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v280H160Zm80-480h400-400Zm480 120h80v-120h-80v120Zm-80 280v-400H400v16l80 64v200H280v-200l80-64v-16H240v400h400ZM360-760h40-40Z" />
  </svg>
)
