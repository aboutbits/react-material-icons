import React from 'react'
import { IconProps } from './types'

const IconPhonelinkOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-600v305q0 14-7 23t-18 14q-11 5-22 2.5T812-267L584-490q-11-11-17.5-26.5T560-548v-52q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600ZM600-160q-17 0-28.5-11.5T560-200v-88L240-608v328h180q25 0 42.5 17.5T480-220q0 25-17.5 42.5T420-160H140q-25 0-42.5-17.5T80-220q0-25 17.5-42.5T140-280h20v-408l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76h-88Zm200-560H360q-20 0-30-12.5T320-760q0-15 10-27.5t30-12.5h440q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720Z" />
  </svg>
)

export { IconPhonelinkOffRoundedFilled as default }
