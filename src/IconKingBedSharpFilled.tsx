import React from 'react'
import { IconProps } from './types'

const IconKingBedSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200h-40l-26-80H80v-280h80v-200h640v200h80v280h-54l-26 80h-40l-26-80H226l-26 80Zm320-360h200v-120H520v120Zm-280 0h200v-120H240v120Z" />
  </svg>
)

export { IconKingBedSharpFilled as default }
