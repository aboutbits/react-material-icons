import React from 'react'
import { IconProps } from './types'

export const IconAddDiamondSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-320h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm41 274L49-480l432-433 430 433L481-46Z" />
  </svg>
)
