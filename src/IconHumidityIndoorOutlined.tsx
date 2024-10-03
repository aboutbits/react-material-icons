import React from 'react'
import { IconProps } from './types.js'

export const IconHumidityIndoorOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M481-300q66 0 112.5-46T640-458q0-32-12-60.5T593-569L480-680 367-569q-23 22-35 50.5T320-458q0 66 47.5 112T481-300Zm-81-160q0-15 6-28t17-24l57-56 57 56q11 11 17 24t6 28H400ZM160-160v-480l320-240 320 240v480H160Zm80-80h480v-360L480-780 240-600v360Zm240-270Z" />
  </svg>
)
