import React from 'react'
import { IconProps } from './types'

export const IconThumbUpSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-520l280-280 74 74-52 206h298v176L774-120H320Zm-240 0v-520h160v520H80Z" />
  </svg>
)
