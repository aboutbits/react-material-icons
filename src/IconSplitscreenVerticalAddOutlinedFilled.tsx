import React from 'react'
import { IconProps } from './types.js'

export const IconSplitscreenVerticalAddOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-560-80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm404 0q-35 0-59.5-23T520-200v-560q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v404q-10-2-20-3t-20-1q-84 0-142.5 59.5T600-157q0 10 1 19t3 18Z" />
  </svg>
)
