import React from 'react'
import { IconProps } from './types'

const IconHdrOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M763-85 84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l680 678q12 12 11.5 28T820-86q-12 12-28.5 12.5T763-85Zm-63-355v66l-60-60v-136q0-13 8.5-21.5T670-600h110q24 0 42 18t18 42v40q0 18-10.5 32.5T804-444l20 46q6 14-2 26t-24 12q-8 0-15-4t-10-12l-29-64h-44Zm0-60h80v-40h-80v40Zm-120 6L474-600h46q24 0 42 18t18 42v46Zm-400 34v70q0 13-8.5 21.5T150-360q-13 0-21.5-8.5T120-390v-180q0-13 8.5-21.5T150-600q13 0 21.5 8.5T180-570v50h80v-50q0-13 8.5-21.5T290-600q13 0 21.5 8.5T320-570v180q0 13-8.5 21.5T290-360q-13 0-21.5-8.5T260-390v-70h-80Zm200-64 60 60v44h45l55 56q-5 2-10 3t-10 1H410q-13 0-21.5-8.5T380-390v-134Z" />
  </svg>
)

export { IconHdrOffRounded as default }
