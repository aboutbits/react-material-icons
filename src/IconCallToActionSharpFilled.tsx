import React from 'react'
import { IconProps } from './types'

export const IconCallToActionSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h480v-120H240v120ZM80-160v-640h800v640H80Z" />
  </svg>
)
