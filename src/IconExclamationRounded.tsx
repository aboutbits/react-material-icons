import React from 'react'
import { IconProps } from './types'

const IconExclamationRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-400q-17 0-28.5-11.5T440-440v-280q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v280q0 17-11.5 28.5T480-400Zm0 200q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200Z" />
  </svg>
)

export { IconExclamationRounded as default }
