import React from 'react'
import { IconProps } from './types'

const IconEqualizerTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z" />
  </svg>
)

export { IconEqualizerTwoTone as default }
