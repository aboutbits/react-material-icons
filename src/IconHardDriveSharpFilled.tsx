import React from 'react'
import { IconProps } from './types'

const IconHardDriveSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-320q25 0 42.5-17.5T740-380q0-25-17.5-42.5T680-440q-25 0-42.5 17.5T620-380q0 25 17.5 42.5T680-320Zm200-280H80l160-160h480l160 160ZM80-200v-320h800v320H80Z" />
  </svg>
)

export { IconHardDriveSharpFilled as default }
