import React from 'react'
import { IconProps } from './types'

const IconLabelImportantSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z" />
  </svg>
)

export { IconLabelImportantSharp as default }
