import React from 'react'
import { IconProps } from './types.js'

export const IconHotelSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-600h80v400h320v-320h480v520h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-240H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z" />
  </svg>
)
