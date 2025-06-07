import React from 'react'
import { IconProps } from './types.js'

export const IconBackupTableSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320h200v-200H320v200Zm0-280h480v-200H320v200Zm280 280h200v-200H600v200Zm-360 80v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z" />
  </svg>
)
