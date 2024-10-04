import React from 'react'
import { IconProps } from './types.js'

export const IconLockResetRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-76 0-144.5-27t-122-74.5Q160-229 126-293.5T83-434q-2-19 9-29.5t26-12.5q15-2 29 6.5t16 29.5q15 121 105.5 201T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h76q17 0 28.5 11.5T320-600q0 17-11.5 28.5T280-560H120q-17 0-28.5-11.5T80-600v-160q0-17 11.5-28.5T120-800q17 0 28.5 11.5T160-760v40q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480ZM400-320q-17 0-28.5-11.5T360-360v-120q0-17 11.5-28.5T400-520v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40q17 0 28.5 11.5T600-480v120q0 17-11.5 28.5T560-320H400Zm40-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40Z" />
  </svg>
)
