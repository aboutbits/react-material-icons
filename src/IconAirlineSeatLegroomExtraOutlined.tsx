import React from 'react'
import { IconProps } from './types.js'

export const IconAirlineSeatLegroomExtraOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-280H160q-33 0-56.5-23.5T80-360v-480h80v480h360v80Zm216 160L600-400H340q-50 0-85-35t-35-85v-320h240v240h120q23 0 42 12.5t30 33.5l136 278 44-20q23-11 46.5-3.5T914-270q12 23 3.5 47T886-188l-150 68Z" />
  </svg>
)
