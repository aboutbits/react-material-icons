import React from 'react'
import { IconProps } from './types'

const IconMimoDisconnectRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M127-833v112l-71-71q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-240h72l28 28q6 6 9 13.5t3 15.5v23q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-23q0-8 3-15.5t9-13.5l28-28H160q-33 0-56.5-23.5T80-320v-440q0-37 23.5-55l23.5-18Zm673-7q33 0 56.5 23.5T880-760v469q0 27-24.5 37.5T812-262L302-772q-19-19-8.5-43.5T331-840h469Z" />
  </svg>
)

export { IconMimoDisconnectRoundedFilled as default }
