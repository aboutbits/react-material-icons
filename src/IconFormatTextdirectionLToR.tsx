import React from 'react'
import { IconProps } from './types'

const IconFormatTextdirectionLToR: React.FC<IconProps> = ({
  title = 'IconFormatTextdirectionLToR',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z" />
  </svg>
)

export { IconFormatTextdirectionLToR as default }
