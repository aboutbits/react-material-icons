import React from 'react'
import { IconProps } from './types.js'

export const IconChessRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80q-17 0-28.5-11.5T120-120v-120q0-33 23.5-56.5T200-320h52l22-160h-74q-17 0-28.5-11.5T160-520q0-17 11.5-28.5T200-560h560q17 0 28.5 11.5T800-520q0 17-11.5 28.5T760-480h-74l22 160h52q33 0 56.5 23.5T840-240v120q0 17-11.5 28.5T800-80H160Zm130-540q-14 0-25-8.5T251-651l-33-149q-2-11 1.5-19.5T231-833q8-5 18-5.5t19 5.5q18 10 37 16t40 6q29 0 55-12t49-30q7-5 15-7.5t16-2.5q8 0 16 2.5t15 7.5q23 18 49 30t55 12q21 0 40-6.5t37-16.5q10-5 19.5-4t17.5 6q8 5 12 13.5t2 18.5l-33 149q-3 14-14 22.5t-25 8.5H290Z" />
  </svg>
)
