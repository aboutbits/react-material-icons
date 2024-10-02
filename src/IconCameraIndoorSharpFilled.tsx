import React from 'react'
import { IconProps } from './types'

export const IconCameraIndoorSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-480l320-240 320 240v480H160Zm160-160h240v-80l80 42v-164l-80 42v-80H320v240Z" />
  </svg>
)
