import React from 'react'
import { IconProps } from './types'

const IconCurrencyFrancRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-160v-80h-40q-17 0-28.5-11.5T200-280q0-17 11.5-28.5T240-320h40v-480q0-17 11.5-28.5T320-840h360q17 0 28.5 11.5T720-800q0 17-11.5 28.5T680-760H360v240h280q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440H360v120h120q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H360v80q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160Z" />
  </svg>
)

export { IconCurrencyFrancRoundedFilled as default }
