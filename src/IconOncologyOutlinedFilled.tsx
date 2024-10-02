import React from 'react'
import { IconProps } from './types'

export const IconOncologyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M863-40 761-142q-18 11-38 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-6 43.5T817-198L919-96l-56 56ZM680-200q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200ZM120-80v-240q0-50 35-85t85-35h80q50 0 85-35t35-85q0-17-11.5-28.5T400-600q-33 0-56.5-23.5T320-680v-200h240v80q117 0 198.5 81.5T840-520v61q-33-29-74-45t-86-16q-100 0-170 70t-70 170q0 21 3.5 41t10.5 39h-54q-17 0-28.5 11.5T360-160v80H120Z" />
  </svg>
)
