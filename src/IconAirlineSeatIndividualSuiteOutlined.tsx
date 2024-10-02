import React from 'react'
import { IconProps } from './types'

export const IconAirlineSeatIndividualSuiteOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-280v-400h80v320h320v-320h320q66 0 113 47t47 113v240H40Zm480-80h320v-160q0-33-23.5-56.5T760-600H520v240Zm0-240v240-240ZM280-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T240-520q0-17 11.5-28.5T280-560q17 0 28.5 11.5T320-520q0 17-11.5 28.5T280-480Zm0-40Z" />
  </svg>
)
