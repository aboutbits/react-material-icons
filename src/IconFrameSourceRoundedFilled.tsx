import React from 'react'
import { IconProps } from './types'

export const IconFrameSourceRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m313-480 59 59q11 11 11 27.5T372-365q-12 12-28.5 12T315-365l-87-87q-12-12-12-28t12-28l88-88q12-12 28-11.5t28 12.5q11 12 11.5 28T372-539l-59 59Zm334 0-59-59q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l87 87q12 12 12 28t-12 28l-88 88q-12 12-28 11.5T588-365q-11-12-11.5-28t11.5-28l59-59ZM200-120q-33 0-56.5-23.5T120-200v-120q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v120h120q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H200Zm560 0H640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h120v-120q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v120q0 33-23.5 56.5T760-120ZM120-640v-120q0-33 23.5-56.5T200-840h120q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760H200v120q0 17-11.5 28.5T160-600q-17 0-28.5-11.5T120-640Zm640 0v-120H640q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h120q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640Z" />
  </svg>
)
