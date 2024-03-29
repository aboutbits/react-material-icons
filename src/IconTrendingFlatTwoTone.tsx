import React from 'react'
import { IconProps } from './types'

const IconTrendingFlatTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 12l-4-4v3H3v2h15v3l4-4z" />
  </svg>
)

export { IconTrendingFlatTwoTone as default }
