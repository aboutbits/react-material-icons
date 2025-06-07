import React from 'react'
import { IconProps } from './types.js'

export const IconImportantDevicesOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-120q-17 0-28.5-11.5T640-160v-318q0-17 11.5-28.5T680-518h160q17 0 28.5 11.5T880-478v318q0 17-11.5 28.5T840-120H680Zm0-80h160v-238H680v238ZM348-410l92-70 92 70-34-114 92-74H476l-36-112-36 112H290l92 74-34 114Zm-28 290v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v162H680q-50 0-85 35t-35 85v198h-80v80h80v80H320Z" />
  </svg>
)
