import React from 'react'
import { IconProps } from './types'

export const IconMarkunreadMailboxSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400v-160h-80v400h640v-400H400v-80h480v560H80v-560h160v-240h320v160H320v320h-80Zm-80-160v160-160 400-400Z" />
  </svg>
)
