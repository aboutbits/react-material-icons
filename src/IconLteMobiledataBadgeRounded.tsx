import React from 'react'
import { IconProps } from './types'

export const IconLteMobiledataBadgeRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm0-80h720v-560H120v560Zm0 0v-560 560Zm200-120q17 0 28.5-11.5T360-360q0-17-11.5-28.5T320-400h-80v-200q0-17-11.5-28.5T200-640q-17 0-28.5 11.5T160-600v240q0 17 11.5 28.5T200-320h120Zm80-240v200q0 17 11.5 28.5T440-320q17 0 28.5-11.5T480-360v-200h40q17 0 28.5-11.5T560-600q0-17-11.5-28.5T520-640H360q-17 0-28.5 11.5T320-600q0 17 11.5 28.5T360-560h40Zm240 240h120q17 0 28.5-11.5T800-360q0-17-11.5-28.5T760-400h-80v-40h40q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520h-40v-40h80q17 0 28.5-11.5T800-600q0-17-11.5-28.5T760-640H640q-17 0-28.5 11.5T600-600v240q0 17 11.5 28.5T640-320Z" />
  </svg>
)
