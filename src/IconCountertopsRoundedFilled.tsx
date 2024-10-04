import React from 'react'
import { IconProps } from './types'

const IconCountertopsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-640q-17 0-28.5-11.5T480-680q0-50 35-85t85-35q50 0 85 35t35 85v120h120q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480h-40v240q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240v-240h-40q-17 0-28.5-11.5T80-520q0-17 11.5-28.5T120-560h120q-33 0-56.5-23.5T160-640v-120q0-17 11.5-28.5T200-800h160q17 0 28.5 11.5T400-760v120q0 33-23.5 56.5T320-560h320v-120q0-17-11.5-28.5T600-720q-17 0-28.5 11.5T560-680t-11.5 28.5Q537-640 520-640Zm-80 400h80v-240h-80v240Z" />
  </svg>
)

export { IconCountertopsRoundedFilled as default }
