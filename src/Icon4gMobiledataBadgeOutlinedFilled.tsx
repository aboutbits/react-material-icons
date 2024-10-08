import React from 'react'
import { IconProps } from './types'

const Icon4gMobiledataBadgeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm680-400H660v80h60v80H600v-240h200q0-33-23.5-56.5T720-680H600q-33 0-56.5 23.5T520-600v240q0 33 23.5 56.5T600-280h120q33 0 56.5-23.5T800-360v-160ZM320-280h80v-120h80v-80h-80v-200h-80v200h-80v-200h-80v280h160v120Z" />
  </svg>
)

export { Icon4gMobiledataBadgeOutlinedFilled as default }
