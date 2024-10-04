import React from 'react'
import { IconProps } from './types'

const IconBlurShortOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-72 0-127-45t-69-115H240v-80h164q5-22 13.5-42.5T440-600H160v-80h440q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Z" />
  </svg>
)

export { IconBlurShortOutlinedFilled as default }
