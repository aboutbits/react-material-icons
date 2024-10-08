import React from 'react'
import { IconProps } from './types'

const IconSpeed075Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-280q-17 0-28.5-11.5T560-320q0-17 11.5-28.5T600-360h120v-80H600q-17 0-28.5-11.5T560-480v-160q0-17 11.5-28.5T600-680h160q17 0 28.5 11.5T800-640q0 17-11.5 28.5T760-600H640v80h80q33 0 56.5 23.5T800-440v80q0 33-23.5 56.5T720-280H600ZM440-600H320q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h130q29 0 49.5 21.5T520-608l-2 18-71 281q-3 13-13 21t-24 8q-19 0-31-15t-7-33l68-272ZM240-280q-17 0-28.5-11.5T200-320q0-17 11.5-28.5T240-360q17 0 28.5 11.5T280-320q0 17-11.5 28.5T240-280Z" />
  </svg>
)

export { IconSpeed075Rounded as default }
