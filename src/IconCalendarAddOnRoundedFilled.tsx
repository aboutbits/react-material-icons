import React from 'react'
import { IconProps } from './types'

const IconCalendarAddOnRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-200h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80Zm-480 40q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h240v-40q0-17 11.5-28.5T600-880q17 0 28.5 11.5T640-840v40h40q33 0 56.5 23.5T760-720v200q0 17-11.5 28.5T720-480q-17 0-28.5-11.5T680-520v-40H200v320h240q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H200Z" />
  </svg>
)

export { IconCalendarAddOnRoundedFilled as default }
