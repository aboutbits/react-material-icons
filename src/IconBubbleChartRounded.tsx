import React from 'react'
import { IconProps } from './types'

const IconBubbleChartRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="7.2" cy="14.4" r="3.2" />
    <circle cx="14.8" cy="18" r="2" />
    <circle cx="15.2" cy="8.8" r="4.8" />
  </svg>
)

export { IconBubbleChartRounded as default }
