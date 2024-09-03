import React from 'react'
import { IconProps } from './types'

const IconAddRowBelowRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-560v-240H200v240h560ZM200-160q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160h-40q-17 0-28.5-11.5T680-200q0-17 11.5-28.5T720-240h40v-240H200v240h40q17 0 28.5 11.5T280-200q0 17-11.5 28.5T240-160h-40Zm280 80q-17 0-28.5-11.5T440-120v-40h-40q-17 0-28.5-11.5T360-200q0-17 11.5-28.5T400-240h40v-40q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v40h40q17 0 28.5 11.5T600-200q0 17-11.5 28.5T560-160h-40v40q0 17-11.5 28.5T480-80Zm0-400Zm0-80v80-80Zm0 0Z" />
  </svg>
)

export { IconAddRowBelowRounded as default }