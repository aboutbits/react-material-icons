import React from 'react'
import { IconProps } from './types'

const IconAirlineSeatLegroomReducedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M620-120q-32 0-54.5-26T551-203l49-197H320q-33 0-56.5-23.5T240-480v-320q0-17 11.5-28.5T280-840h160q17 0 28.5 11.5T480-800v200h197q40 0 64 32t13 70l-74 258h58q27 0 44.5 16.5T800-180q0 27-16.5 43.5T740-120H620ZM200-280q-33 0-56.5-23.5T120-360v-440q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v440h240q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280H200Z" />
  </svg>
)

export { IconAirlineSeatLegroomReducedRoundedFilled as default }
