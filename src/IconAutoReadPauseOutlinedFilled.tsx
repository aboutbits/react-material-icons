import React from 'react'
import { IconProps } from './types'

const IconAutoReadPauseOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400h80v-320h-80v320Zm160 0h80v-320h-80v320ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Z" />
  </svg>
)

export { IconAutoReadPauseOutlinedFilled as default }
