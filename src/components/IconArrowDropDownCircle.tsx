import React from 'react'
import { IconProps } from './types'
const IconArrowDropDownCircle: React.FC<IconProps> = (
  props: IconProps
): any => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" />
  </svg>
)

export { IconArrowDropDownCircle }
