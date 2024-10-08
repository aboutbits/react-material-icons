import React from 'react'
import { IconProps } from './types'

const IconLooks4RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-440v120q0 17 11.5 28.5T560-280q17 0 28.5-11.5T600-320v-320q0-17-11.5-28.5T560-680q-17 0-28.5 11.5T520-640v120h-80v-120q0-17-11.5-28.5T400-680q-17 0-28.5 11.5T360-640v160q0 17 11.5 28.5T400-440h120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { IconLooks4RoundedFilled as default }
