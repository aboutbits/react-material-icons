import React from 'react'
import { IconProps } from './types'

const IconMoreDownRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h320q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H240q-17 0-28.5-11.5T200-240v-360q0-17 11.5-28.5T240-640q17 0 28.5 11.5T280-600v320Zm200-200h320q17 0 28.5 11.5T840-440q0 17-11.5 28.5T800-400H440q-17 0-28.5-11.5T400-440v-360q0-17 11.5-28.5T440-840q17 0 28.5 11.5T480-800v320Z" />
  </svg>
)

export { IconMoreDownRoundedFilled as default }
