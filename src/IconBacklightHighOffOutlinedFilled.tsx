import React from 'react'
import { IconProps } from './types'

const IconBacklightHighOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-360v-80h160v80H40Zm400-320v-200h80v200h-80Zm266 110-56-56 113-113 57 56-114 113Zm54 210v-80h160v80H760Zm31 305L606-240H280v-120h206L55-791l57-57 736 736-57 57Z" />
  </svg>
)

export { IconBacklightHighOffOutlinedFilled as default }
