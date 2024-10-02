import React from 'react'
import { IconProps } from './types'

export const IconAreaChartSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-320 464-614 305-395 120-540v-140l160 120 200-280 200 160h160v360ZM120-160v-280l200 160 160-220 360 281v59H120Z" />
  </svg>
)
