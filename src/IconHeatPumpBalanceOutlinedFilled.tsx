import React from 'react'
import { IconProps } from './types.js'

export const IconHeatPumpBalanceOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-216q50 0 85-35t35-85v-240q0-17 11.5-28.5T440-616q17 0 28.5 11.5T480-576v240q0 50 35 85t85 35q50 0 85-35t35-85v-280q0-17 11.5-28.5T760-656h47l-47 46 56 57 144-143-144-144-56 57 47 47h-47q-50 0-85 35t-35 85v280q0 17-11.5 28.5T600-296q-17 0-28.5-11.5T560-336v-240q0-50-35-85t-85-35q-50 0-85 35t-35 85v240q0 17-11.5 28.5T280-296q-17 0-28.5-11.5T240-336v-360h-80v360q0 50 35 85t85 35ZM120-96q-33 0-56.5-23.5T40-176v-320h880v320q0 33-23.5 56.5T840-96H120Z" />
  </svg>
)
