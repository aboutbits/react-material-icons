import React from 'react'
import { IconProps } from './types'

const IconHotelClass: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <rect fill="none" height="24" width="24" />
    <path d="M8.58,10H1l6.17,4.41L4.83,22L11,17.31L17.18,22l-2.35-7.59L21,10h-7.58L11,2L8.58,10z M21.36,22l-1.86-6.01L23.68,13h-3.44 l-3.08,2.2l1.46,4.72L21.36,22z M17,8l-1.82-6l-1.04,3.45L14.91,8H17z" />
  </svg>
)

export { IconHotelClass as default }
