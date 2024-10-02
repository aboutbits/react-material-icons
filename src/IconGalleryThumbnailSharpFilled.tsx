import React from 'react'
import { IconProps } from './types'

export const IconGalleryThumbnailSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-560h560v560H40Zm640-320v-240h240v240H680ZM160-360h320L375-500l-75 100-55-73-85 113Zm520 160v-240h240v240H680Z" />
  </svg>
)
