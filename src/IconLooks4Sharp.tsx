import React from 'react'
import { IconProps } from './types'

const IconLooks4Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M.04 0h24v24h-24V0z" fill="none" />
    <path d="M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z" />
  </svg>
)

export { IconLooks4Sharp as default }
