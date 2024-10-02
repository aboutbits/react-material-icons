import React from 'react'
import { IconProps } from './types'

export const IconValveRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-760H320q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H520v80q0 17-11.5 28.5T480-640q-17 0-28.5-11.5T440-680v-80ZM160-159v-242q0-17 11.5-28.5T200-441q17 0 28.5 11.5T240-401v1h120v-120h-1q-17 0-28.5-11.5T319-560q0-17 11.5-28.5T359-600h242q17 0 28.5 11.5T641-560q0 17-11.5 28.5T601-520h-1v120h120v-1q0-17 11.5-28.5T760-441q17 0 28.5 11.5T800-401v242q0 17-11.5 28.5T760-119q-17 0-28.5-11.5T720-159v-1H240v1q0 17-11.5 28.5T200-119q-17 0-28.5-11.5T160-159Z" />
  </svg>
)
