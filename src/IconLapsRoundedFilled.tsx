import React from 'react'
import { IconProps } from './types'

export const IconLapsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-520q0-117 81.5-198.5T360-800h240q117 0 198.5 81.5T880-520q0 103-66 181t-168 95q-18 3-32-8t-14-28q0-17 13.5-29t31.5-16q69-16 112-70.5T800-520q0-83-58.5-141.5T600-720H360q-83 0-141.5 58.5T160-520q0 83 58.5 141.5T360-320h7l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L388-148q-11 11-27.5 11T332-148q-12-12-12-28.5t12-28.5l35-35h-7q-117 0-198.5-81.5T80-520Z" />
  </svg>
)
