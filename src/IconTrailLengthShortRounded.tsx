import React from 'react'
import { IconProps } from './types'

const IconTrailLengthShortRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-280q-73 0-127.5-45.5T404-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h204q5-23 13.5-43t22.5-37H280q-17 0-28.5-11.5T240-640q0-17 11.5-28.5T280-680h320q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-280 80q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h40q17 0 28.5 11.5T400-320q0 17-11.5 28.5T360-280h-40Zm280-200Z" />
  </svg>
)

export { IconTrailLengthShortRounded as default }