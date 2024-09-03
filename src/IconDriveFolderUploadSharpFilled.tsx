import React from 'react'
import { IconProps } from './types'

const IconDriveFolderUploadSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm360-120h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Z" />
  </svg>
)

export { IconDriveFolderUploadSharpFilled as default }
