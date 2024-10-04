import React from 'react'
import { IconProps } from './types'

const IconSunnySnowingOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-410v-80h160v80H40Zm214-210L140-733l57-56 113 113-56 56Zm-14 420q-21 0-35.5-14.5T190-250q0-21 14.5-35.5T240-300q21 0 35.5 14.5T290-250q0 21-14.5 35.5T240-200Zm40-210v-40q0-83 58.5-141.5T480-650q83 0 141.5 58.5T680-450v40H280Zm80 370q-21 0-35.5-14.5T310-90q0-21 14.5-35.5T360-140q21 0 35.5 14.5T410-90q0 21-14.5 35.5T360-40Zm120-160q-21 0-35.5-14.5T430-250q0-21 14.5-35.5T480-300q21 0 35.5 14.5T530-250q0 21-14.5 35.5T480-200Zm-40-530v-160h80v160h-80ZM600-40q-21 0-35.5-14.5T550-90q0-21 14.5-35.5T600-140q21 0 35.5 14.5T650-90q0 21-14.5 35.5T600-40Zm106-580-57-56 114-113 56 56-113 113Zm14 420q-21 0-35.5-14.5T670-250q0-21 14.5-35.5T720-300q21 0 35.5 14.5T770-250q0 21-14.5 35.5T720-200Zm40-210v-80h160v80H760Z" />
  </svg>
)

export { IconSunnySnowingOutlinedFilled as default }
