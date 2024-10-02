import React from 'react'
import { IconProps } from './types'

export const IconWifiProxyOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-180h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-170 60v-280h170v110h110v170H640Zm-160 0L0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L822-463q-14-14-28-28.5T766-520l78-78q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 40-40 28.5 28.5L577-217l-97 97Zm0-357Z" />
  </svg>
)
