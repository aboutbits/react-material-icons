import React from 'react'
import { IconProps } from './types'

export const IconNestMultiRoomOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-480l320-240 320 240v480H160Zm80-80h280v-120H240v120Zm360 0h120v-120H600v120ZM240-400h120v-119H240v119Zm200 0h280v-119H440v119ZM292-599h376L480-740 292-599Z" />
  </svg>
)
