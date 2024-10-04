import React from 'react'
import { IconProps } from './types.js'

export const IconMultipleStopOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160 120-320l160-160 57 56-64 64h167v80H273l63 64-56 56Zm280-120q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360q17 0 28.5 11.5T600-320q0 17-11.5 28.5T560-280Zm160 0q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280Zm-40-200-57-56 64-64H520v-80h167l-63-64 56-56 160 160-160 160ZM240-600q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640q0 17-11.5 28.5T240-600Zm160 0q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600Z" />
  </svg>
)