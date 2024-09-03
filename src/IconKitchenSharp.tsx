import React from 'react'
import { IconProps } from './types'

const IconKitchenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-640v-120h80v120h-80Zm0 360v-200h80v200h-80ZM160-80v-800h640v800H160Zm80-80h480v-360H240v360Zm0-440h480v-200H240v200Z" />
  </svg>
)

export { IconKitchenSharp as default }
