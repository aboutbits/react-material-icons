import React from 'react'
import { IconProps } from './types'

const IconHelicopterSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-440v-240q-100 0-170 70t-70 170h240ZM520-80H120v-80h400v80Zm80-120H40v-240q0-134 93-227t227-93h240v200h200l40-80h80v280l-320 32v128Zm160-600H120v-80h640v80Z" />
  </svg>
)

export { IconHelicopterSharpFilled as default }
