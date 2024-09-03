import React from 'react'
import { IconProps } from './types'

const IconAddPhotoAlternateSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h440q-20 26-30 57t-10 63q0 83 58.5 141.5T720-520q32 0 63-10t57-30v440H120Zm120-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconAddPhotoAlternateSharpFilled as default }
