import React from 'react'
import { IconProps } from './types'

const IconSpeed12Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280q-17 0-28.5-11.5T280-320v-280h-40q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680h40q33 0 56.5 23.5T360-600v280q0 17-11.5 28.5T320-280Zm280 0q-33 0-56.5-23.5T520-360v-80q0-33 23.5-56.5T600-520h80v-80H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h120q33 0 56.5 23.5T760-600v80q0 33-23.5 56.5T680-440h-80v80h120q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H600Zm-160 0q-17 0-28.5-11.5T400-320q0-17 11.5-28.5T440-360q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280Z" />
  </svg>
)

export { IconSpeed12Rounded as default }