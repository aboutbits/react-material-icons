import React from 'react'
import { IconProps } from './types'

const IconTibiaAltRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M721-634q19 29 29 62t10 69v363q0 25-17.5 42.5T700-80H430q-17 0-29.5-9.5T383-115q-12-42-17-82t-6.5-76q-1.5-36 .5-66t4-52q0-1 0 0-37-8-92.5-26T159-471q-17-11-20-31.5t9-37.5l185-259q13-17 33.5-23t40.5 3l212 97q32 14 57.5 36.5T721-634ZM540-201q9 0 17-4t13-10q6 6 14 10t16 4q17 0 28.5-11.5T640-241q0-17-11.5-28.5T600-281v-159q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-8 0-16 3.5t-14 9.5q-5-6-13-9.5t-17-3.5q-17 0-28.5 11.5T500-480q0 17 11.5 28.5T540-440v159q-17 0-28.5 11.5T500-241q0 17 11.5 28.5T540-201Z" />
  </svg>
)

export { IconTibiaAltRoundedFilled as default }
