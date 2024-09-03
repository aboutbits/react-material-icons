import React from 'react'
import { IconProps } from './types'

const IconQuickreplyRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-240h-40q-17 0-28.5-11.5T680-280v-160q0-17 11.5-28.5T720-480h115q16 0 24.5 13.5T862-438l-50 118h39q17 0 26 14t1 29L779-78q-4 7-11.5 5.5T760-82v-158Zm-520 0-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v200q0 17-11.5 28.5T840-560H680q-33 0-56.5 23.5T600-480v200q0 17-11.5 28.5T560-240H240Z" />
  </svg>
)

export { IconQuickreplyRoundedFilled as default }
