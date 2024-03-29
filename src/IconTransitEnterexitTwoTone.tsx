import React from 'react'
import { IconProps } from './types'

const IconTransitEnterexitTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z" />
  </svg>
)

export { IconTransitEnterexitTwoTone as default }
