import React from 'react'
import { IconProps } from './types'

const IconWineBarRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200v-164q-86-14-143-80t-57-156v-200q0-17 11.5-28.5T280-840h400q17 0 28.5 11.5T720-800v200q0 90-57 156t-143 80v164h80q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h80ZM320-640h320v-120H320v120Z" />
  </svg>
)

export { IconWineBarRoundedFilled as default }
