import React from 'react'
import { IconProps } from './types'

export const IconTextDecreaseRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-440q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520h240q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H640Zm-453 97-41 114q-5 14-16 21.5t-25 7.5q-23 0-36.5-19.5T63-261l176-469q5-14 17-22t26-8h36q15 0 26.5 8t16.5 22l177 470q8 22-5.5 41T496-200q-14 0-26-8t-17-22l-40-113H187Zm29-81h168l-82-232h-4l-82 232Z" />
  </svg>
)
