import React from 'react'
import { IconProps } from './types.js'

export const IconAlarmOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M748-320 364-710q-18-19-13-43.5t29-32.5q23-8 48.5-11t51.5-3q74 0 139.5 28T734-694.5Q783-645 811.5-579T840-436q0 26-3.5 51T825-336q-8 24-33 29.5T748-320Zm-40-462q-11-11-11-28t11-28q11-11 28-11t28 11l114 114q11 11 11 28t-11 28q-11 11-28 11t-28-11L708-782ZM480-80q-74 0-139.5-28T226-184q-49-48-77.5-113T120-436q0-62 18.5-116.5T192-652l-34-34-20 20q-11 11-28 11t-28-11q-11-11-11-28t11-28l20-20-46-46q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-98-98q-45 33-99.5 51.5T480-80Z" />
  </svg>
)
