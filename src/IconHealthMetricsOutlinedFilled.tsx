import React from 'react'
import { IconProps } from './types.js'

export const IconHealthMetricsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-200H80v-160h258l68 102q5 8 14 13t19 5q13 0 24-8t15-20l54-162 34 52q6 8 15 13t19 5h280v160H680v200H280Zm148-370-35-52q-5-8-14-13t-19-5H80v-160h200v-200h400v200h200v160H621l-68-102q-5-8-14-13t-19-5q-13 0-23.5 8T482-612l-54 162Z" />
  </svg>
)
