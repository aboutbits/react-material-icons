import React from 'react'
import { IconProps } from './types'

const IconVerticalAlignTopTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z" />
  </svg>
)

export { IconVerticalAlignTopTwoTone as default }