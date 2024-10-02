import React from 'react'
import { IconProps } from './types'

export const IconDesktopMacSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-120v-40l80-80H80v-600h800v600H560l80 80v40H320Z" />
  </svg>
)
