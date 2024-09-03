import React from 'react'
import { IconProps } from './types'

const IconMagnificationSmallSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-520h160v-160H200v160ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconMagnificationSmallSharpFilled as default }
