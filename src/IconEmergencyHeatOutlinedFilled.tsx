import React from 'react'
import { IconProps } from './types'

export const IconEmergencyHeatOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-400q0-105 50-187t110-138q60-56 110-85.5l50-29.5v132q0 37 25 58.5t56 21.5q17 0 32.5-7t28.5-23l18-22q72 42 116 116.5T760-400q0 88-43 160.5T604-125q17-24 26.5-52.5T640-238q0-40-15-75.5T582-377L440-516 299-377q-29 29-44 64t-15 75q0 32 9.5 60.5T276-125q-70-42-113-114.5T120-400Zm320-4 85 83q17 17 26 38t9 45q0 49-35 83.5T440-120q-50 0-85-34.5T320-238q0-23 9-44.5t26-38.5l85-83Zm400-116q-17 0-28.5-11.5T800-560q0-17 11.5-28.5T840-600q17 0 28.5 11.5T880-560q0 17-11.5 28.5T840-520Zm-40-120v-200h80v200h-80Z" />
  </svg>
)
