import React from 'react'
import { IconProps } from './types'

const IconSwapHoriz: React.FC<IconProps> = ({
  title = 'IconSwapHoriz',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
  </svg>
)

export { IconSwapHoriz as default }
