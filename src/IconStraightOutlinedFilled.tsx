import React from 'react'
import { IconProps } from './types'

const IconStraightOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-567l-64 63-56-56 160-160 160 160-56 56-64-63v567h-80Z" />
  </svg>
)

export { IconStraightOutlinedFilled as default }
