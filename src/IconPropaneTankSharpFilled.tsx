import React from 'react'
import { IconProps } from './types.js'

export const IconPropaneTankSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-440v-120q0-57 34-99t86-56v-165h400v165q52 14 86 56t34 99v120H160ZM320-80q-66 0-113-47t-47-113v-120h640v120q0 66-47 113T640-80H320Zm40-640h80v-40h80v40h80v-80H360v80Z" />
  </svg>
)
