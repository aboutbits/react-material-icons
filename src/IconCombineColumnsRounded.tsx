import React from 'react'
import { IconProps } from './types'

const IconCombineColumnsRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-480Zm240 0ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v40q0 17-11.5 28.5T400-680q-17 0-28.5-11.5T360-720v-40H200v560h160v-40q0-17 11.5-28.5T400-280q17 0 28.5 11.5T440-240v40q0 33-23.5 56.5T360-120H200Zm400 0q-33 0-56.5-23.5T520-200v-40q0-17 11.5-28.5T560-280q17 0 28.5 11.5T600-240v40h160v-560H600v40q0 17-11.5 28.5T560-680q-17 0-28.5-11.5T520-720v-40q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600ZM440-440h-40q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h40v-40q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560v40h40q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440h-40v40q0 17-11.5 28.5T480-360q-17 0-28.5-11.5T440-400v-40Z" />
  </svg>
)

export { IconCombineColumnsRounded as default }