import React from 'react'
import { IconProps } from './types'

const IconNatureRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 16.12c3.37-.4 6.01-3.19 6.16-6.64.17-3.87-3.02-7.25-6.89-7.31-3.92-.05-7.1 3.1-7.1 7 0 3.47 2.52 6.34 5.83 6.89V20H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-5v-3.88z" />
  </svg>
)

export { IconNatureRounded as default }
