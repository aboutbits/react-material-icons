import React from 'react'
import { IconProps } from './types'

const IconListRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-600q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h480q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H320Zm0 160q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520h480q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H320Zm0 160q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h480q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H320ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
  </svg>
)

export { IconListRoundedFilled as default }
