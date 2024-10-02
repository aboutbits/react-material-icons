import React from 'react'
import { IconProps } from './types'

export const IconEmojiFoodBeverageSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-80h640v80H160Zm560-520h80v-120h-80v120ZM160-280v-560h200v96l-80 64v200h200v-200l-80-64v-96h400q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v280H160Z" />
  </svg>
)
