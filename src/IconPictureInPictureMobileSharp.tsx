import React from 'react'
import { IconProps } from './types.js'

export const IconPictureInPictureMobileSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Zm-40 360v-320H440v320h240Zm-80-80h-80v-160h80v160Z" />
  </svg>
)
