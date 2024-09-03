import React from 'react'
import { IconProps } from './types'

const IconStylerRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M216-400h64q0-17 11.5-28.5T320-440h320q17 0 28.5 11.5T680-400h64q7 0 11.5-5t4.5-13q0-5-2.5-8.5T750-432L480-552 210-432q-5 2-7.5 5.5T200-418q0 8 4.5 13t11.5 5ZM320-80q-17 0-28.5-11.5T280-120v-200h-64q-40 0-68-28t-28-68q0-29 16-53.5t42-36.5l262-116v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q38 0 67.5 21t43.5 53q7 15 0 30t-22 22q-15 7-30 .5T517-775q-5-11-14.5-18t-22.5-7q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720t28.5 11.5Q520-697 520-680v58l262 116q26 12 42 36.5t16 53.5q0 40-28 68t-68 28h-64v200q0 17-11.5 28.5T640-80H320Z" />
  </svg>
)

export { IconStylerRoundedFilled as default }
