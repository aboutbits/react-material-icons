import React from 'react'
import { IconProps } from './types'

const IconBlurMediumSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-280H280v-80h160q-14-17-22.5-37.5T404-440H180v-80h224q5-22 13.5-42.5T440-600H160v-80h440q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-440 80v-80h80v80h-80Z" />
  </svg>
)

export { IconBlurMediumSharpFilled as default }
