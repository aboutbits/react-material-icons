import React from 'react'
import { IconProps } from './types'

const IconFloatPortrait2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-520h240v-200H320v200ZM800-80H160v-800h640v800Z" />
  </svg>
)

export { IconFloatPortrait2SharpFilled as default }
