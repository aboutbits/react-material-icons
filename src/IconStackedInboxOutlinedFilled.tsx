import React from 'react'
import { IconProps } from './types.js'

export const IconStackedInboxOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm280-200q33 0 56.5-23.5T640-560h200v-200H280v200h200q0 33 23.5 56.5T560-480Zm200 360H120q-33 0-56.5-23.5T40-200v-480h80v480h640v80Z" />
  </svg>
)