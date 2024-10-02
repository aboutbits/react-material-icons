import React from 'react'
import { IconProps } from './types'

export const IconFunicularOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-40v-80l200-55v-105H120v-440H80v-80h120v-80h560v80h120v80h-40v360H720v55l200-55v80L40-40Zm320-167 240-66v-87h-80v80H360v73ZM200-480h240v-240H200v240Zm320-80h240v-160H520v160Z" />
  </svg>
)
