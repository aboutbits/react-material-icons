import React from 'react'
import { IconProps } from './types'

const IconLineStartRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-380q-42 0-71-29t-29-71q0-42 29-71t71-29q31 0 56 17t36 43h568q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H272q-11 26-36 43t-56 17Z" />
  </svg>
)

export { IconLineStartRoundedFilled as default }
