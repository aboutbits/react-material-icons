import React from 'react'
import { IconProps } from './types'

export const IconMediaOutputOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-620q25 0 42.5-17.5T400-680q0-25-17.5-42.5T340-740q-25 0-42.5 17.5T280-680q0 25 17.5 42.5T340-620ZM560-80h-80q-33 0-56.5-23.5T400-160v-160q0-100 70-170t170-70q100 0 170 70t70 170v160q0 33-23.5 56.5T800-80h-80v-200h100v-40q0-75-52.5-127.5T640-500q-75 0-127.5 52.5T460-320v40h100v200Zm-240-80H160q-33 0-56.5-23.5T80-240v-560q0-33 23.5-56.5T160-880h360q33 0 56.5 23.5T600-800v162q-57 7-105.5 32T409-542q-15-9-32.5-13.5T340-560q-58 0-99 41t-41 99q0 54 34.5 92.5T320-281v121Zm20-320q5 0 10 1t10 3q-14 26-23.5 54T323-363q-19-5-31-21t-12-36q0-25 17.5-42.5T340-480Z" />
  </svg>
)
