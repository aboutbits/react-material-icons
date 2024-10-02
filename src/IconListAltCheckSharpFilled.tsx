import React from 'react'
import { IconProps } from './types'

export const IconListAltCheckSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v388L694-306l-85-85-170 169 102 102H120Zm160-320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h240v-80H440v80Zm0-160h240v-80H440v80ZM694-80 552-222l57-56 85 85 170-170 56 57L694-80Z" />
  </svg>
)
