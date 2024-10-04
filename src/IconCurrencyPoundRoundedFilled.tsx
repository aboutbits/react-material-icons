import React from 'react'
import { IconProps } from './types.js'

export const IconCurrencyPoundRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120q-17 0-28.5-11.5T240-160v-18q0-11 5-20t13-14q38-25 62-63t24-85q0-11-1.5-21t-3.5-19h-59q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480h20q-21-33-40.5-69.5T240-640q0-92 64-156t156-64q61 0 110.5 29.5T649-753q8 14 1 28t-22 21q-15 6-29.5.5T574-722q-19-26-49-42t-65-16q-58 0-99 41t-41 99q0 48 24 80t49 80h127q17 0 28.5 11.5T560-440q0 17-11.5 28.5T520-400h-99q2 9 2.5 19t.5 21q0 50-17.5 90T364-200h196q35 0 57-16.5t29-44.5q4-15 13.5-25.5T685-297q17 0 28 11.5t11 28.5q0 61-54.5 99T560-120H280Z" />
  </svg>
)