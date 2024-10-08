import React from 'react'
import { IconProps } from './types'

const IconHelpClinicOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280h80v-200h-80v200Zm40-280q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560ZM160-120v-480l320-240 320 240v480H160Z" />
  </svg>
)

export { IconHelpClinicOutlinedFilled as default }
