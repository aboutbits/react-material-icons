import React from 'react'
import { IconProps } from './types.js'

export const IconStarRateHalfSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-644v236l96 74-36-122 90-64H518l-38-124ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z" />
  </svg>
)
