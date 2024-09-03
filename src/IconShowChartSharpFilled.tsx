import React from 'react'
import { IconProps } from './types'

const IconShowChartSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z" />
  </svg>
)

export { IconShowChartSharpFilled as default }
