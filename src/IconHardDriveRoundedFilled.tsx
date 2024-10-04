import React from 'react'
import { IconProps } from './types.js'

export const IconHardDriveRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-320q25 0 42.5-17t17.5-43q0-25-17.5-42.5T680-440q-26 0-43 17.5T620-380q0 26 17 43t43 17ZM80-600l136-136q11-11 25.5-17.5T273-760h413q17 0 31.5 6.5T743-736l137 136H80Zm80 400q-34 0-57-23t-23-57v-240h800v240q0 34-23.5 57T800-200H160Z" />
  </svg>
)