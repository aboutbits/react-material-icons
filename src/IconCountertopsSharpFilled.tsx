import React from 'react'
import { IconProps } from './types.js'

export const IconCountertopsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-320H80v-80h160q-33 0-56.5-23.5T160-640v-160h240v160q0 33-23.5 56.5T320-560h320v-120q0-17-11.5-28.5T600-720q-17 0-28.5 11.5T560-680h-80q0-50 35-85t85-35q50 0 85 35t35 85v120h160v80h-80v320H160Zm280-80h80v-240h-80v240Z" />
  </svg>
)