import React from 'react'
import { IconProps } from './types'

export const IconBattery5BarSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-480h240v-160H360v160Z" />
  </svg>
)
