import React from 'react'
import { IconProps } from './types'

const IconHeightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-273v-414l-36 36q-11 11-27.5 11T348-652q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11 27.5T612-652q-12 12-28.5 12T555-652l-35-35v414l36-36q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508-148q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L348-252q-11-11-11.5-27.5T348-308q11-11 28-11t28 11l36 35Z" />
  </svg>
)

export { IconHeightRounded as default }
