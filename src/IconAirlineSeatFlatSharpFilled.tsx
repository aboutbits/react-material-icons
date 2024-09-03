import React from 'react'
import { IconProps } from './types'

const IconAirlineSeatFlatSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-400v-280h520v280H360ZM80-280v-80h800v80H80Zm120-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)

export { IconAirlineSeatFlatSharpFilled as default }
