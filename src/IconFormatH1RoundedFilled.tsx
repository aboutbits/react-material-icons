import React from 'react'
import { IconProps } from './types.js'

export const IconFormatH1RoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280q-17 0-28.5-11.5T200-320v-320q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640v120h160v-120q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v320q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320v-120H280v120q0 17-11.5 28.5T240-280Zm480 0q-17 0-28.5-11.5T680-320v-280h-40q-17 0-28.5-11.5T600-640q0-17 11.5-28.5T640-680h80q17 0 28.5 11.5T760-640v320q0 17-11.5 28.5T720-280Z" />
  </svg>
)
