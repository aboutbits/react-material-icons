import React from 'react'
import { IconProps } from './types'

const IconViewWeekRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h53q33 0 56.5 23.5T293-720v480q0 33-23.5 56.5T213-160h-53Zm294 0q-33 0-56.5-23.5T374-240v-480q0-33 23.5-56.5T454-800h53q33 0 56.5 23.5T587-720v480q0 33-23.5 56.5T507-160h-53Zm293 0q-33 0-56.5-23.5T667-240v-480q0-33 23.5-56.5T747-800h53q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160h-53Z" />
  </svg>
)

export { IconViewWeekRoundedFilled as default }
