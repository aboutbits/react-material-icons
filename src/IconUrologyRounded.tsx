import React from 'react'
import { IconProps } from './types'

export const IconUrologyRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v40q0 17-11.5 28.5T400-40q-17 0-28.5-11.5T360-80v-41q-25-5-43-22.5T294-187l-13-80q-6-37 18-65t61-28v-47q-10 4-19.5 5.5T320-400q-100 0-170-70T80-640v-40q0-100 70-170t170-70q50 0 85 35t35 85q0 50-35 85t-85 35h-40q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h40q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-66 0-113 47t-47 113v40q0 66 47 113t113 47q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560h-40q-17 0-28.5-11.5T240-600q0-17 11.5-28.5T280-640h40q50 0 85 35t35 85v160h80v-160q0-50 35-85t85-35h40q17 0 28.5 11.5T720-600q0 17-11.5 28.5T680-560h-40q-17 0-28.5 11.5T600-520q0 17 11.5 28.5T640-480q66 0 113-47t47-113v-40q0-66-47-113t-113-47q-17 0-28.5 11.5T600-800q0 17 11.5 28.5T640-760h40q17 0 28.5 11.5T720-720q0 17-11.5 28.5T680-680h-40q-50 0-85-35t-35-85q0-50 35-85t85-35q100 0 170 70t70 170v40q0 100-70 170t-170 70q-11 0-20.5-1.5T600-407v47q37 0 61 28t18 65l-13 80q-5 26-23 43.5T600-121v41q0 17-11.5 28.5T560-40q-17 0-28.5-11.5T520-80v-40h-80Zm-80-160 13 80h214l13-80H360Zm0 0 13 80-13-80Z" />
  </svg>
)
