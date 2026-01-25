import React from 'react'
import { IconProps } from './types.js'

export const IconAlignFlexCenterOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80v-340H120v-120h320v-340h80v340h320v120H520v340h-80Z" />
  </svg>
)
