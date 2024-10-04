import React from 'react'
import { IconProps } from './types.js'

export const IconPhotoAlbumSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Zm120-160h400L545-420 440-280l-65-87-95 127Zm160-280 100-60 100 60v-280H440v280Z" />
  </svg>
)
