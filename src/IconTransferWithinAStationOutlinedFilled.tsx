import React from 'react'
import { IconProps } from './types.js'

export const IconTransferWithinAStationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m120-40 112-564-72 28v136H80v-188l202-86q29-12 59-2.5t47 36.5l40 64q27 43 71.5 69.5T600-520v80q-66 0-123.5-27.5T380-540l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm260-700q-33 0-56.5-23.5T300-820q0-33 23.5-56.5T380-900q33 0 56.5 23.5T460-820q0 33-23.5 56.5T380-740ZM780-40l-42-42 28-28H560v-60h206l-28-28 42-42 100 100L780-40ZM660-210 560-310l100-100 42 42-28 28h206v60H674l28 28-42 42Z" />
  </svg>
)