import React from 'react'
import { IconProps } from './types'

const IconRavenOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-240 334-80l-74-30 58-141q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l238 97-160 60v60l314 200H400q-33 0-56.5-23.5T320-520h-80q0 66 47 113t113 47h440l40 200h-80l-40-80H560v160h-80v-160h-80ZM240-760q-17 0-28.5 11.5T200-720q0 17 11.5 28.5T240-680q17 0 28.5-11.5T280-720q0-17-11.5-28.5T240-760Z" />
  </svg>
)

export { IconRavenOutlinedFilled as default }
