import React from 'react'
import { IconProps } from './types.js'

export const IconDoneAllRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M70-438q-12-12-11.5-28T71-494q12-11 28-11.5t28 11.5l142 142 14 14 14 14q12 12 11.5 28T296-268q-12 11-28 11.5T240-268L70-438Zm424 85 340-340q12-12 28-11.5t28 12.5q11 12 11.5 28T890-636L522-268q-12 12-28 12t-28-12L296-438q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l141 141Zm169-282L522-494q-11 11-27.5 11T466-494q-12-12-12-28.5t12-28.5l141-141q11-11 27.5-11t28.5 11q12 12 12 28.5T663-635Z" />
  </svg>
)