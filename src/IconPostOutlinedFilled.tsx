import React from 'react'
import { IconProps } from './types'

const IconPostOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm120-280h480v-80H240v80Zm0 120h480v-60H240v60Z" />
  </svg>
)

export { IconPostOutlinedFilled as default }
