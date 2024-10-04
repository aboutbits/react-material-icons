import React from 'react'
import { IconProps } from './types'

const IconContractEditRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-50 0-85-35t-35-85v-80q0-17 11.5-28.5T160-320h80v-480q0-33 23.5-56.5T320-880h440q33 0 56.5 23.5T840-800v240q0 17-11.5 28.5T800-520q-17 0-28.5-11.5T760-560v-240H320v480h159q23 0 31.5 20.5T503-263q-11 11-17 25.5t-6 30.5v87q0 17-11.5 28.5T440-80H240Zm320-40v-66q0-8 3-16t9-13l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-5 5-13 8.5T666-80h-66q-17 0-28.5-11.5T560-120Zm263-184 37-39-37-37-38 38 38 38ZM400-560h280q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480H400q-17 0-28.5-11.5T360-520q0-17 11.5-28.5T400-560Zm0-120h280q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600H400q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680Z" />
  </svg>
)

export { IconContractEditRoundedFilled as default }
