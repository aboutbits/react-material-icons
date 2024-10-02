import React from 'react'
import { IconProps } from './types'

export const IconScreenRotationAltSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M544-48 150-440h114l280 280 200-200H640v-80h240v240h-80v-104L544-48ZM80-520v-240h80v104l256-256 394 392H696L416-800 216-600h104v80H80Z" />
  </svg>
)
