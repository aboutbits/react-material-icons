import React from 'react'
import { IconProps } from './types.js'

export const IconCallMissedRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-543v143q0 17-11.5 28.5T160-360q-17 0-28.5-11.5T120-400v-240q0-17 11.5-28.5T160-680h240q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H256l224 224 276-276q12-12 28-11.5t28 12.5q11 12 11.5 28T812-595L537-320q-12 12-27 18t-30 6q-15 0-30-6t-27-18L200-543Z" />
  </svg>
)
