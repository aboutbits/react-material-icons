import React from 'react'
import { IconProps } from './types'

const IconLooks5RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-280q33 0 56.5-23.5T600-360v-80q0-33-23.5-56.5T520-520h-80v-80h120q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680H400q-17 0-28.5 11.5T360-640v160q0 17 11.5 28.5T400-440h120v80H400q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280h120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { IconLooks5RoundedFilled as default }
