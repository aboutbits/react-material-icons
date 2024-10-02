import React from 'react'
import { IconProps } from './types'

export const IconPartnerReportsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-440v-400h80v400h-80ZM120-120v-200h80v120h560v-120h80v200H120Zm320-160v-80h80v80h-80Z" />
  </svg>
)
