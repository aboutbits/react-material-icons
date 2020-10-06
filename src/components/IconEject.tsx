import React from 'react'
import { IconProps } from './types'

const IconEject: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 24V0h24v24H0z" fill="none" />
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </svg>
)

export { IconEject }
