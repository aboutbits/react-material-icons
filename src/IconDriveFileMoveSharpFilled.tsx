import React from 'react'
import { IconProps } from './types'

const IconDriveFileMoveSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h320l80 80h400v560H80Zm408-240-65 65 56 56 161-161-161-161-56 56 65 65H320v80h168Z" />
  </svg>
)

export { IconDriveFileMoveSharpFilled as default }
