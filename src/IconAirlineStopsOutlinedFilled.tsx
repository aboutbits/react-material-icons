import React from 'react'
import { IconProps } from './types'

const IconAirlineStopsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-200v-80h80q-15-138-118-229T80-600v-80q129 0 237 68t163 184q38-81 100-143.5T719-680H560v-80h280v280h-80v-132q-93 57-160 141t-80 191h80v80H360Z" />
  </svg>
)

export { IconAirlineStopsOutlinedFilled as default }
