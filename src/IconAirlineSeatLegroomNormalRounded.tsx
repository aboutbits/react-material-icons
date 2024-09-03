import React from 'react'
import { IconProps } from './types'

const IconAirlineSeatLegroomNormalRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-400H320q-33 0-56.5-23.5T240-480v-320q0-17 11.5-28.5T280-840h160q17 0 28.5 11.5T480-800v200h200q33 0 56.5 23.5T760-520v280h60q26 0 43 17t17 43q0 26-17 43t-43 17H680q-17 0-28.5-11.5T640-160v-240ZM520-280H200q-33 0-56.5-23.5T120-360v-440q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v440h320q17 0 28.5 11.5T560-320q0 17-11.5 28.5T520-280Z" />
  </svg>
)

export { IconAirlineSeatLegroomNormalRounded as default }
