import React from 'react'
import { IconProps } from './types.js'

export const IconHeartCheckOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120 313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 21.5t81 61.5q34-40 81-61.5t99-21.5q85 0 142.5 51.5T834-668q-20-8-42-10t-45-2q-85 0-156 68.5T520-440q0 48 21 97.5t59 80.5q-19 17-49.5 43.5T498-172l-58 52Zm278-193L604-426l57-56 57 56 141-141 57 56-198 198Z" />
  </svg>
)