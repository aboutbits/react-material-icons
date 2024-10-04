import React from 'react'
import { IconProps } from './types.js'

export const IconCarRentalOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-680q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22.5t45 57.5h326v80h-40v80h-80v-80H434q-14 35-45 57.5T320-680Zm0-80q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-17 0-28.5 11.5T280-800q0 17 11.5 28.5T320-760Zm40 500q17 0 28.5-11.5T400-300q0-17-11.5-28.5T360-340q-17 0-28.5 11.5T320-300q0 17 11.5 28.5T360-260Zm240 0q17 0 28.5-11.5T640-300q0-17-11.5-28.5T600-340q-17 0-28.5 11.5T560-300q0 17 11.5 28.5T600-260ZM200-376l66-192q5-14 16.5-23t25.5-9h344q14 0 25.5 9t16.5 23l66 192v264q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-48H280v48q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-264Zm106-64h348l-28-80H334l-28 80Z" />
  </svg>
)