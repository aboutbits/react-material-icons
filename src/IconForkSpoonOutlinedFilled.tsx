import React from 'react'
import { IconProps } from './types.js'

export const IconForkSpoonOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80v-366q-54-14-87-57t-33-97v-280h80v240h40v-240h80v240h40v-240h80v280q0 54-33 97t-87 57v366h-80Zm400 0v-381q-54-18-87-75.5T520-667q0-89 47-151t113-62q66 0 113 62.5T840-666q0 73-33 130t-87 75v381h-80Z" />
  </svg>
)