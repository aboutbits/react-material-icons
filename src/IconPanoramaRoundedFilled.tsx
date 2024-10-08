import React from 'react'
import { IconProps } from './types'

const IconPanoramaRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm290-200-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11h400q12 0 18-11t-2-21L586-499q-6-8-16-8t-16 8L450-360Z" />
  </svg>
)

export { IconPanoramaRoundedFilled as default }
