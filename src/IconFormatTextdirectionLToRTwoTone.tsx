import React from 'react'
import { IconProps } from './types'

const IconFormatTextdirectionLToRTwoTone: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2z" opacity=".3" />
    <path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2zm12 14l-4-4v3H5v2h12v3z" />
  </svg>
)

export { IconFormatTextdirectionLToRTwoTone as default }
