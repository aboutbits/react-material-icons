import React from 'react'
import { IconProps } from './types'

const IconTransitionSlideOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h80q33 0 56.5 23.5T280-720v480q0 33-23.5 56.5T200-160h-80Zm320 0q-33 0-56.5-23.5T360-240v-480q0-33 23.5-56.5T440-800h400q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H440Z" />
  </svg>
)

export { IconTransitionSlideOutlinedFilled as default }
