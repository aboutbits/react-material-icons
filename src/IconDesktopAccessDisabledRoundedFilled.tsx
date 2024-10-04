import React from 'react'
import { IconProps } from './types'

const IconDesktopAccessDisabledRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M127-833v112l-71-71q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-240h-48v80h40q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H360q-17 0-28.5-11.5T320-120q0-17 11.5-28.5T360-160h40v-80H160q-33 0-56.5-23.5T80-320v-440q0-37 23.5-55l23.5-18Zm753 73v469q0 14-7 23t-18 14q-11 5-22 3.5T812-262L302-772q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h469q33 0 56.5 23.5T880-760Z" />
  </svg>
)

export { IconDesktopAccessDisabledRoundedFilled as default }
