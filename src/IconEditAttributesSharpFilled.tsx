import React from 'react'
import { IconProps } from './types'

const IconEditAttributesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h400q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H280Zm42-108 142-142-42-42-100 100-40-40-42 42 82 82Z" />
  </svg>
)

export { IconEditAttributesSharpFilled as default }
