import React from 'react'
import { IconProps } from './types'

const IconAlignJustifyFlexEndRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM600-280q-17 0-28.5-11.5T560-320v-320q0-17 11.5-28.5T600-680h40q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280h-40Zm-240 0q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h40q17 0 28.5 11.5T440-640v320q0 17-11.5 28.5T400-280h-40Z" />
  </svg>
)

export { IconAlignJustifyFlexEndRounded as default }
