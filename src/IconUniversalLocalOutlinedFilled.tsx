import React from 'react'
import { IconProps } from './types'

export const IconUniversalLocalOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-320q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480Zm0 200q81-69 120.5-127.5T640-516q0-75-48.5-119.5T480-680q-63 0-111.5 44.5T320-516q0 50 39.5 108.5T480-280Z" />
  </svg>
)
