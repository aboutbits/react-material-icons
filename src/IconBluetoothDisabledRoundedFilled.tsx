import React from 'react'
import { IconProps } from './types'

export const IconBluetoothDisabledRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-384 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l168-168L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L624-224 508-108q-6 6-13 9t-15 3q-16 0-28-11.5T440-137v-247Zm80 150 46-46-46-46v92Zm44-274-56-56 88-88-76-74v174l-80-80v-191q0-18 12-29.5t28-11.5q8 0 15 3t13 9l172 172q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L564-508Z" />
  </svg>
)
