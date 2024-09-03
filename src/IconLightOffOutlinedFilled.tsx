import React from 'react'
import { IconProps } from './types'

const IconLightOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm218-296L274-798q41-38 93.5-60T480-880q125 0 212.5 87.5T780-580q0 71-25 121.5T698-376Zm150 264-57 57-265-265H330q-69-41-109.5-110T180-580q0-20 2.5-39t7.5-37L56-792l56-56 736 736ZM646-280v80H320v-80h326Z" />
  </svg>
)

export { IconLightOffOutlinedFilled as default }
