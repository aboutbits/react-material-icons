import React from 'react'
import { IconProps } from './types.js'

export const IconHighQualitySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M590-300h60v-60h70v-240H520v240h70v60Zm-350-60h60v-80h80v80h60v-240h-60v100h-80v-100h-60v240Zm340-60v-120h80v120h-80ZM80-160v-640h800v640H80Z" />
  </svg>
)
