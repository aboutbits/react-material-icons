import React from 'react'
import { IconProps } from './types.js'

export const IconEditAttributesRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h400q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H280Zm70-136 93-93q9-9 9-21t-9-21q-9-9-21-9t-21 9l-79 79-19-19q-9-9-21-9t-21 9q-9 9-9 21t9 21l33 33q12 12 28 12t28-12Z" />
  </svg>
)