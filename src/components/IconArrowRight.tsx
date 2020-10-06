import React from 'react'
import { IconProps } from './types'

const IconArrowRight: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M10 17l5-5-5-5v10z" />
    <path d="M0 24V0h24v24H0z" fill="none" />
  </svg>
)

export { IconArrowRight }
