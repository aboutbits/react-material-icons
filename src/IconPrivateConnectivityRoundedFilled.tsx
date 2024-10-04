import React from 'react'
import { IconProps } from './types.js'

export const IconPrivateConnectivityRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-200q-106 0-184.5-68.5T203-440h-83q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h83q14-103 92.5-171.5T480-760q106 0 184.5 68.5T757-520h83q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-83q-14 103-92.5 171.5T480-200Zm-80-140h160q17 0 28.5-11.5T600-380v-120q0-17-11.5-28.5T560-540v-36q0-35-23-59.5T480-660q-33 0-56.5 23.5T400-580v40q-17 0-28.5 11.5T360-500v120q0 17 11.5 28.5T400-340Zm80-70q-13 0-21.5-8.5T450-440q0-13 8.5-21.5T480-470q13 0 21.5 8.5T510-440q0 13-8.5 21.5T480-410Zm-40-130v-40q0-17 11.5-28.5T480-620q17 0 28.5 11.5T520-580v40h-80Z" />
  </svg>
)