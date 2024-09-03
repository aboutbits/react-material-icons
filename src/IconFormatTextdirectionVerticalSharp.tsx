import React from 'react'
import { IconProps } from './types'

const IconFormatTextdirectionVerticalSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-200q-66 0-113-47T80-600q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80Zm480 80L560-320l56-56 64 63v-447h80v447l64-64 56 57-160 160ZM240-520v-160q-33 0-56.5 23.5T160-600q0 33 23.5 56.5T240-520Zm0-80Z" />
  </svg>
)

export { IconFormatTextdirectionVerticalSharp as default }