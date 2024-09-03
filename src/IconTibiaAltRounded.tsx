import React from 'react'
import { IconProps } from './types'

const IconTibiaAltRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M364-391q-22-5-50.5-12.5T253-424q-24-10-49.5-22T153-475q-15-10-17.5-27.5T144-535q10-14 27-16t31 8q36 26 73.5 41.5t68 23.5q30.5 8 50 11l19.5 3q18 1 28.5 15t7.5 32l-4 28q-4 28-5 71t3.5 95.5Q448-170 464-120q5 14-5 25.5T434-81q-15 2-30.5-6T381-121q-11-41-16-80.5t-6-74.5q-1-35 1-64.5t4-50.5q-1 0 0 0Zm357-243q19 29 29 62t10 69v383q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-383q0-48-25.5-87T586-649L358-752q-17-8-22-26t6-34q8-12 22-15.5t28 2.5l227 103q32 14 57.5 36.5T721-634ZM540-201q9 0 17-4t13-10q6 6 14 10t16 4q17 0 28.5-11.5T640-241q0-17-11.5-28.5T600-281v-159q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-8 0-16 3.5t-14 9.5q-5-6-13-9.5t-17-3.5q-17 0-28.5 11.5T500-480q0 17 11.5 28.5T540-440v159q-17 0-28.5 11.5T500-241q0 17 11.5 28.5T540-201ZM480-80q-25-52-33-111t-7.5-109q.5-50 5-83.5L449-417q3-18-7.5-32T413-464l-24-3.5q-24-3.5-60-15t-78.5-32Q208-535 169-570q39 35 81.5 55.5t78.5 32q36 11.5 60 15l24 3.5q18 1 28.5 15t7.5 32l-4.5 33.5q-4.5 33.5-5 83.5t7.5 109q8 59 33 111Z" />
  </svg>
)

export { IconTibiaAltRounded as default }