import React from 'react'
import { IconProps } from './types'

const IconSdCardRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-447q0-16 6-30.5t17-25.5l194-194q11-11 25.5-17t30.5-6h287q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm160-440q17 0 28.5-11.5T440-560v-80q0-17-11.5-28.5T400-680q-17 0-28.5 11.5T360-640v80q0 17 11.5 28.5T400-520Zm120 0q17 0 28.5-11.5T560-560v-80q0-17-11.5-28.5T520-680q-17 0-28.5 11.5T480-640v80q0 17 11.5 28.5T520-520Zm120 0q17 0 28.5-11.5T680-560v-80q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640v80q0 17 11.5 28.5T640-520Z" />
  </svg>
)

export { IconSdCardRoundedFilled as default }
