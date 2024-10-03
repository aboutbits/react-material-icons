import React from 'react'
import { IconProps } from './types.js'

export const IconPanoramaSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm160-160h480L570-520 450-360l-90-120-120 160Z" />
  </svg>
)
