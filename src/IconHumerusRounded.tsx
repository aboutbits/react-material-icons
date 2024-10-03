import React from 'react'
import { IconProps } from './types.js'

export const IconHumerusRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M362-80q-51 0-86.5-35T240-201q0-24 9.5-46t26.5-39l85-83v-151q-1-14-12-23t-23-17q-45-34-65.5-70T240-710q0-71 52.5-120.5T420-880q17 0 32.5 4.5T480-865q13 5 21.5 10t17.5 5q20 0 40-14 11-6 23-11t27-5q48 0 79.5 33.5T720-765q0 23-9.5 46.5T682-676l-81 83v223l84 84q17 17 26 39t9 46q0 51-34.5 86T600-80q-24 0-46-9t-39-26q-7-7-15.5-10.5T481-129q-10 0-18.5 3.5T447-115q-17 17-39 26t-46 9Zm-2-80q8 0 15.5-3t13.5-9q18-18 41-28t49-10q26 0 49 10t41 28q6 6 13.5 9t15.5 3q17 0 29.5-12.5T640-202q0-8-3.5-15t-9.5-13l-89-88q-8-8-13-19.5t-5-23.5v-231q0-17 6-32t17-26l83-83q7-7 10.5-15t3.5-17q0-15-9.5-25.5T606-801q-7 0-13.5 1t-12.5 6l-37 26q-5 3-10.5 5.5T520-760q-8 0-15.5-4.5T490-774q-14-11-31.5-18.5T420-800q-41 0-70.5 26.5T320-710q0 27 12.5 43t36.5 39q5-16 15-39.5t26-39.5q7-6 14.5-9.5T440-720q17 0 28.5 11t11.5 28q0 8-3.5 16.5T466-650l-13 21q-13 21-13 69v197q0 12-5 23.5T422-320l-91 90q-6 5-9 12.5t-3 15.5q0 17 12 29.5t29 12.5Zm120-321Z" />
  </svg>
)
