import React from 'react'
import { IconProps } from './types.js'

export const IconUpiPayOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-360h60v-80h100q17 0 28.5-11.5T640-480v-80q0-17-11.5-28.5T600-600H440v240Zm240 0h60v-240h-60v240ZM500-500v-40h80v40h-80ZM240-360h120q17 0 28.5-11.5T400-400v-200h-60v180h-80v-180h-60v200q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)
