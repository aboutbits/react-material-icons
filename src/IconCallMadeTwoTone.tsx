import React from 'react'
import { IconProps } from './types'

const IconCallMadeTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z" />
  </svg>
)

export { IconCallMadeTwoTone as default }
