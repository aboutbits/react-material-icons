import React from 'react'
import { IconProps } from './types.js'

export const IconNoLuggageOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 718-129q-8 5-17.5 7t-20.5 2q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120q-33 0-56.5-23.5T200-200v-447L27-820l57-57L876-85l-57 57ZM360-240h80v-167l-80-80v247Zm160 0h80v-7l-80-80v87Zm240-75L600-475v-125h-80v45L360-715v-85q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v80h80q33 0 56.5 23.5T760-640v325ZM440-720h80v-80h-80v80Z" />
  </svg>
)
