import React from 'react'
import { IconProps } from './types'

export const IconSpeed2xRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-280H280q-33 0-56.5-23.5T200-360v-80q0-33 23.5-56.5T280-520h80v-80H240q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680h120q33 0 56.5 23.5T440-600v80q0 33-23.5 56.5T360-440h-80v80h120q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280Zm240-133-70 116q-5 8-12.5 12.5T541-280q-20 0-30.5-17.5t.5-34.5l89-148-89-148q-11-17-.5-34.5T541-680q9 0 16.5 4.5T570-663l70 116 70-116q5-8 12.5-12.5T739-680q20 0 30.5 17.5T769-628l-89 148 89 148q11 17 .5 34.5T739-280q-9 0-16.5-4.5T710-297l-70-116Z" />
  </svg>
)
