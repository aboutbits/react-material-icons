import React from 'react'
import { IconProps } from './types.js'

export const IconFolderSpecialSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m504-292 92-70 92 70-34-114 92-74H632l-36-112-36 112H446l92 74-34 114ZM80-160v-640h320l80 80h400v560H80Z" />
  </svg>
)
