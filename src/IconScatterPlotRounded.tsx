import React from 'react'
import { IconProps } from './types'

const IconScatterPlotRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="7" cy="14" r="3" />
    <circle cx="11" cy="6" r="3" />
    <circle cx="16.6" cy="17.6" r="3" />
  </svg>
)

export { IconScatterPlotRounded as default }
