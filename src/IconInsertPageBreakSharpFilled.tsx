import React from 'react'
import { IconProps } from './types'

export const IconInsertPageBreakSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-200h640v200H160Zm360-520h200L520-800v200ZM360-360v-80h240v80H360Zm320 0v-80h240v80H680Zm-640 0v-80h240v80H40Zm120-160v-360h400l240 240v120H160Z" />
  </svg>
)
