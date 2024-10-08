import React from 'react'
import { IconProps } from './types'

const IconLineCurveOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-160q0-116-44-218T556-556q-76-76-178-120t-218-44v-80q132 0 248.5 50.5T612-612q87 87 137.5 203.5T800-160h-80Z" />
  </svg>
)

export { IconLineCurveOutlined as default }
