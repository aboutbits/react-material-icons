import React from 'react'
import { IconProps } from './types.js'

export const IconTrailLengthMediumRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h160q-14-17-22.5-37T444-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h204q5-23 13.5-43t22.5-37H320q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h320q83 0 141.5 58.5T840-480q0 83-58.5 141.5T640-280H320Zm-160 0q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h40q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280h-40Z" />
  </svg>
)