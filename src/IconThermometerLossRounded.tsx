import React from 'react'
import { IconProps } from './types'

export const IconThermometerLossRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-640q-17 0-28.5-11.5T560-680q0-17 11.5-28.5T600-720h240q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H600ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120Zm0-80q50 0 85-35t35-85q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320q0 50 35 85t85 35Zm0-120Z" />
  </svg>
)
