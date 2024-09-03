import React from 'react'
import { IconProps } from './types'

const IconHumidityIndoorRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M481-300q66 0 112.5-46T640-458q0-32-12-60.5T593-569l-85-83q-12-11-28-11t-28 11l-85 83q-23 22-35 50.5T320-458q0 66 47.5 112T481-300Zm-81-160q0-15 6-28t17-24l57-56 57 56q11 11 17 24t6 28H400ZM240-160q-33 0-56.5-23.5T160-240v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-160H240Z" />
  </svg>
)

export { IconHumidityIndoorRoundedFilled as default }
