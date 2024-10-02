import React from 'react'
import { IconProps } from './types'

export const IconAppBadgingRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-600q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 126.5-85.5T479-880q36 0 51 5t20 19q4 9 2.5 19t-7.5 20q-13 21-19 45t-6 52q0 83 58.5 141.5T720-520q26 0 50.5-6t46.5-19q10-5 20-6.5t18 2.5q14 5 19.5 20t5.5 50q0 83-31.5 155.5T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
