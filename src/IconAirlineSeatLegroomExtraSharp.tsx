import React from 'react'
import { IconProps } from './types'

export const IconAirlineSeatLegroomExtraSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-280H80v-560h80v480h360v80Zm216 160L600-400H220v-440h240v240h169l159 324 98-45 57 105-207 96Z" />
  </svg>
)
