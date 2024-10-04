import React from 'react'
import { IconProps } from './types'

const IconLabelImportantRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-160H160q-25 0-36-22t4-42l192-256-192-256q-15-20-4-42t36-22h440q19 0 36 8.5t28 23.5l180 240q16 21 16 48t-16 48L664-192q-11 15-28 23.5t-36 8.5Z" />
  </svg>
)

export { IconLabelImportantRoundedFilled as default }
