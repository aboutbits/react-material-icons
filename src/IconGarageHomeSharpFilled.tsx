import React from 'react'
import { IconProps } from './types.js'

export const IconGarageHomeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-480l320-240 320 240v480H680v-400H280v400H160Zm200-80h240v-80H360v80Zm0-160h240v-80H360v80Z" />
  </svg>
)
