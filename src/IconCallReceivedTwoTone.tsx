import React from 'react'
import { IconProps } from './types'

const IconCallReceivedTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z" />
  </svg>
)

export { IconCallReceivedTwoTone as default }
