import React from 'react'
import { IconProps } from './types'

const IconImagesearchRollerSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-40H400v-320h80v-120H80v-320h160v-80h560v240H240v-80h-80v160h400v200h80v320Z" />
  </svg>
)

export { IconImagesearchRollerSharpFilled as default }
