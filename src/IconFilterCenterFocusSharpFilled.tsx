import React from 'react'
import { IconProps } from './types'

const IconFilterCenterFocusSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80ZM480-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)

export { IconFilterCenterFocusSharpFilled as default }
