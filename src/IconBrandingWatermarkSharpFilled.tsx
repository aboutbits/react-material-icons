import React from 'react'
import { IconProps } from './types'

const IconBrandingWatermarkSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-280h360v-240H400v240ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconBrandingWatermarkSharpFilled as default }
