import React from 'react'
import { IconProps } from './types'

const IconViewDaySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z" />
  </svg>
)

export { IconViewDaySharp as default }
