import React from 'react'
import { IconProps } from './types.js'

export const IconPulmonologyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-51 0-85.5-34.5T80-240v-167l105-281q12-33 42-52.5t65-19.5q26 0 49 13t38 35v112L277-498l43 42 120-120v-304h80v304l120 120 42-42-102-102v-112q15-22 38-35t49-13q35 0 64.5 19.5T774-688l105 281v167q0 51-35 85.5T759-120H639q-50 0-84.5-34.5T520-240v-80l15-127-55-56-56 56 16 127v80q0 51-35 85.5T320-120H200Z" />
  </svg>
)
