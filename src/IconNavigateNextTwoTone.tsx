import React from 'react'
import { IconProps } from './types'

const IconNavigateNextTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z" />
  </svg>
)

export { IconNavigateNextTwoTone as default }
