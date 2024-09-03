import React from 'react'
import { IconProps } from './types'

const IconUrologySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-40v-80h-55l-39-240h94v-47q-10 4-19.5 5.5T320-400q-100 0-170-70T80-640v-40q0-100 70-170t170-70q50 0 85 35t35 85q0 50-35 85t-85 35h-80v-80h80q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-66 0-113 47t-47 113v40q0 66 47 113t113 47q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560h-80v-80h80q50 0 85 35t35 85v160h80v-160q0-50 35-85t85-35h80v80h-80q-17 0-28.5 11.5T600-520q0 17 11.5 28.5T640-480q66 0 113-47t47-113v-40q0-66-47-113t-113-47q-17 0-28.5 11.5T600-800q0 17 11.5 28.5T640-760h80v80h-80q-50 0-85-35t-35-85q0-50 35-85t85-35q100 0 170 70t70 170v40q0 100-70 170t-170 70q-11 0-20.5-1.5T600-407v47h94l-39 240h-55v80h-80v-80h-80v80h-80Zm13-160h214l13-80H360l13 80Zm0 0-13-80 13 80Z" />
  </svg>
)

export { IconUrologySharp as default }