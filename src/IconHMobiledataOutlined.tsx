import React from 'react'
import { IconProps } from './types'

export const IconHMobiledataOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-400h80v160h240v-160h80v400h-80v-160H360v160h-80Z" />
  </svg>
)
