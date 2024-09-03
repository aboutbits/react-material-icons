import React from 'react'
import { IconProps } from './types'

const IconWaterPhOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-82Q238-96 159-187T80-408q0-100 79.5-217.5T400-880q161 137 240.5 254.5T720-408v8h-80v-8q0-73-60.5-165T400-774Q281-665 220.5-573T160-408q0 97 56 164t144 81v81Zm40-387Zm40 389v-240h140q24 0 42 18t18 42v40q0 24-18 42t-42 18h-80v80h-60Zm240 0v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60ZM500-220h80v-40h-80v40Z" />
  </svg>
)

export { IconWaterPhOutlined as default }