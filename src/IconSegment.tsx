import React from 'react'
import { IconProps } from './types'

const IconSegment: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z" />
  </svg>
)

export { IconSegment as default }
