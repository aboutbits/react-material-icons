import React from 'react'
import { IconProps } from './types'

const IconVillaOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120v-360h320q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v360H640v-200h-80v200H360Zm-240 0v-520l520-200v280H280v440H120Z" />
  </svg>
)

export { IconVillaOutlinedFilled as default }
