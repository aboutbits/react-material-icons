import React from 'react'
import { IconProps } from './types'

const IconFormatAlignCenterRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm160-160q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h320q17 0 28.5 11.5T680-320q0 17-11.5 28.5T640-280H320ZM160-440q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm160-160q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h320q17 0 28.5 11.5T680-640q0 17-11.5 28.5T640-600H320ZM160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Z" />
  </svg>
)

export { IconFormatAlignCenterRounded as default }
