import React from 'react'
import { IconProps } from './types'

const IconGMobiledataRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-33 0-56.5-23.5T280-360v-240q0-33 23.5-56.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H360v240h200v-80h-40q-17 0-28.5-11.5T480-480q0-17 11.5-28.5T520-520h80q17 0 28.5 11.5T640-480v120q0 33-23.5 56.5T560-280H360Z" />
  </svg>
)

export { IconGMobiledataRounded as default }
