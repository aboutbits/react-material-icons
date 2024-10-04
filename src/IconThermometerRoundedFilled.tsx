import React from 'react'
import { IconProps } from './types.js'

export const IconThermometerRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-83 0-141.5-58.5T280-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-120Zm-40-440h80v-160q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160Z" />
  </svg>
)
