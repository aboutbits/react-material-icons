import React from 'react'
import { IconProps } from './types'

export const IconSpeed02xRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280H280q-17 0-28.5-11.5T240-320v-120q0-33 23.5-56.5T320-520h80v-80H280q-17 0-28.5-11.5T240-640q0-17 11.5-28.5T280-680h120q33 0 56.5 23.5T480-600v80q0 33-23.5 56.5T400-440h-80v80h120q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280Zm240-133-70 116q-5 8-12.5 12.5T581-280q-20 0-30.5-17.5t.5-34.5l89-148-89-148q-11-17-.5-34.5T581-680q9 0 16.5 4.5T610-663l70 116 70-116q5-8 12.5-12.5T779-680q20 0 30.5 17.5T809-628l-89 148 89 148q11 17 .5 34.5T779-280q-9 0-16.5-4.5T750-297l-70-116ZM160-280q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
  </svg>
)
