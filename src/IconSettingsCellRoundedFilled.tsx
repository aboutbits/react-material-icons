import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsCellRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0ZM320-160q-33 0-56.5-23.5T240-240v-640q0-33 23.5-56.5T320-960h320q33 0 56.5 23.5T720-880v640q0 33-23.5 56.5T640-160H320Zm0-200h320v-400H320v400Z" />
  </svg>
)
