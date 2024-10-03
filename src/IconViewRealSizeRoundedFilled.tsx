import React from 'react'
import { IconProps } from './types.js'

export const IconViewRealSizeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280q-17 0-28.5-11.5T280-320v-280h-40q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680h60q25 0 42.5 17.5T360-620v300q0 17-11.5 28.5T320-280Zm360 0q-17 0-28.5-11.5T640-320v-280h-40q-17 0-28.5-11.5T560-640q0-17 11.5-28.5T600-680h60q25 0 42.5 17.5T720-620v300q0 17-11.5 28.5T680-280ZM480-440q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 160q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Z" />
  </svg>
)
