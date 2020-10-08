import React from 'react'
import { IconProps } from './types'

const IconScatterPlot: React.FC<IconProps> = ({
  title = 'IconScatterPlot',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <g>
      <circle cx="7" cy="14" r="3" />
      <circle cx="11" cy="6" r="3" />
      <circle cx="16.6" cy="17.6" r="3" />
    </g>
  </svg>
)

export { IconScatterPlot as default }
