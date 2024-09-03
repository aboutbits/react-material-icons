import React from 'react'
import { IconProps } from './types'

const IconHeatPumpBalanceRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m807-656-18 18q-12 11-12 28t11 29q11 12 27.5 11.5T844-581l88-87q12-12 12-28t-12-28l-87-87q-12-12-28.5-12T788-811q-11 12-11 28.5t11 27.5l19 19h-47q-50 0-85 35t-35 85v280q0 17-11.5 28.5T600-296q-17 0-28.5-11.5T560-336v-240q0-50-35-85t-85-35q-50 0-85 35t-35 85v240q0 17-11.5 28.5T280-296q-17 0-28.5-11.5T240-336v-320q0-17-11.5-28.5T200-696q-17 0-28.5 11.5T160-656v320q0 50 35 85t85 35q50 0 85-35t35-85v-240q0-17 11.5-28.5T440-616q17 0 28.5 11.5T480-576v240q0 50 35 85t85 35q50 0 85-35t35-85v-280q0-17 11.5-28.5T760-656h47ZM120-96q-33 0-56.5-23.5T40-176v-280q0-17 11.5-28.5T80-496h800q17 0 28.5 11.5T920-456v280q0 33-23.5 56.5T840-96H120Z" />
  </svg>
)

export { IconHeatPumpBalanceRoundedFilled as default }
