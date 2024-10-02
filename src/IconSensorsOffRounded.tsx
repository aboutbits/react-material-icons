import React from 'react'
import { IconProps } from './types'

export const IconSensorsOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M763-84 325-521q-2 10-3.5 20t-1.5 21q0 23 6 43.5t17 38.5q9 14 8.5 31T339-338q-12 12-29 11.5T284-341q-21-29-32.5-65T240-480q0-28 6-54t17-49l-59-59q-21 36-32.5 76.5T160-480q0 56 17 105.5t49 89.5q11 14 11 30.5T225-226q-12 12-29 11.5T168-229q-42-52-65-115.5T80-480q0-62 17.5-117T146-700l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm27-214q-14-8-18.5-24t2.5-31q13-29 19.5-61t6.5-66q0-56-17-105.5T734-675q-11-14-11.5-30.5T734-734q12-12 29.5-11.5T792-731q42 51 65 115t23 136q0 45-9.5 87.5T843-312q-7 14-23 18t-30-4Zm-125-93q-17-4-25.5-17.5T635-439q2-10 3.5-20t1.5-21q0-23-6-43.5T617-562q-9-14-8-31t13-29q12-12 28-11.5t26 14.5q21 29 32.5 64.5T720-480q0 15-1.5 30t-5.5 29q-4 16-17.5 25t-30.5 5Z" />
  </svg>
)
