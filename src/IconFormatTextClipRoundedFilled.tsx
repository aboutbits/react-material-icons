import React from 'react'
import { IconProps } from './types'

const IconFormatTextClipRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm560 0q-17 0-28.5-11.5T720-200v-240H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h360v-240q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160Z" />
  </svg>
)

export { IconFormatTextClipRoundedFilled as default }
