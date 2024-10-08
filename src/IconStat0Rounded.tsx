import React from 'react'
import { IconProps } from './types'

const IconStat0Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M423-257 257-423q-12-12-18-27t-6-30q0-15 6-30t18-27l166-166q12-12 27-18t30-6q15 0 30 6t27 18l166 166q12 12 18 27t6 30q0 15-6 30t-18 27L537-257q-12 12-27 18t-30 6q-15 0-30-6t-27-18Zm57-57 166-166-166-166-166 166 166 166Zm0-166Z" />
  </svg>
)

export { IconStat0Rounded as default }
