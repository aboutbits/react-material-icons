import React from 'react'
import { IconProps } from './types'

const IconTrailLengthRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h200q-14-17-22.5-37T484-440h-84q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h84q5-23 13.5-43t22.5-37H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h520q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H320ZM120-440q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h160q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440H120Zm40 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h40q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280h-40Z" />
  </svg>
)

export { IconTrailLengthRoundedFilled as default }
