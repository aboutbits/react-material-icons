import React from 'react'
import { IconProps } from './types'

export const IconFormatAlignLeftRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm0-160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h400q17 0 28.5 11.5T600-320q0 17-11.5 28.5T560-280H160Zm0-160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h400q17 0 28.5 11.5T600-640q0 17-11.5 28.5T560-600H160Zm0-160q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Z" />
  </svg>
)
