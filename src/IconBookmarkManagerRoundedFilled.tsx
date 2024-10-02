import React from 'react'
import { IconProps } from './types'

export const IconBookmarkManagerRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm263-184 37-39-37-37-38 38 38 38ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v83q0 18-14.5 29t-33.5 8h-11q-28 0-52.5 10T724-480L503-259q-11 11-17 25.5t-6 30.5v3q0 17-11.5 28.5T440-160H160Z" />
  </svg>
)
