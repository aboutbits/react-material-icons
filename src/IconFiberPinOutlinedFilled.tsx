import React from 'react'
import { IconProps } from './types'

export const IconFiberPinOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-360h60v-80h100q17 0 28.5-11.5T400-480v-80q0-17-11.5-28.5T360-600H200v240Zm250 0h60v-240h-60v240Zm110 0h50v-140l102 140h48v-240h-50v140L610-600h-50v240ZM260-500v-40h80v40h-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)
