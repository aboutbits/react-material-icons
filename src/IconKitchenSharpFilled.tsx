import React from 'react'
import { IconProps } from './types'

const IconKitchenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-640h80v-120h-80v120Zm0 360h80v-200h-80v200Zm160-200ZM160-80v-440h640v440H160Zm0-520v-280h640v280H160Z" />
  </svg>
)

export { IconKitchenSharpFilled as default }
