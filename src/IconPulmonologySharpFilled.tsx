import React from 'react'
import { IconProps } from './types'

const IconPulmonologySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-880h80v304l120 120 42-42-101-102v-160h167l132 353v287H520v-200l16-128-56-56-56 56 16 128v200H80v-287l132-353h168v160L278-498l42 42 120-120v-304Z" />
  </svg>
)

export { IconPulmonologySharpFilled as default }
