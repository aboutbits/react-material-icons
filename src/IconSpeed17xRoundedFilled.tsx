import React from 'react'
import { IconProps } from './types.js'

export const IconSpeed17xRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-17 0-28.5-11.5T120-320v-280H80q-17 0-28.5-11.5T40-640q0-17 11.5-28.5T80-680h80q17 0 28.5 11.5T200-640v320q0 17-11.5 28.5T160-280Zm600-133-70 116q-5 8-12.5 12.5T661-280q-20 0-30.5-17.5t.5-34.5l89-148-89-148q-11-17-.5-34.5T661-680q9 0 16.5 4.5T690-663l70 116 70-116q5-8 12.5-12.5T859-680q20 0 30.5 17.5T889-628l-89 148 89 148q11 17 .5 34.5T859-280q-9 0-16.5-4.5T830-297l-70-116ZM450-280q-19 0-31-15t-7-33l68-272H360q-17 0-28.5-11.5T320-640q0-17 11.5-28.5T360-680h130q29 0 49.5 21.5T560-608l-2 18-71 281q-3 13-13 21t-24 8Zm-170 0q-17 0-28.5-11.5T240-320q0-17 11.5-28.5T280-360q17 0 28.5 11.5T320-320q0 17-11.5 28.5T280-280Z" />
  </svg>
)