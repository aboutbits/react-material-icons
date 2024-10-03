import React from 'react'
import { IconProps } from './types.js'

export const IconWifiFindRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M451-149 61-540q-12-12-18-28t-5-32q1-16 7-31t20-26q82-70 195-106.5T480-800q111 0 222.5 37T899-653q12 11 18.5 24.5T925-600q1 15-4.5 30T904-544q-81-81-190-128.5T480-720q-103 0-195 32.5T117-597l391 392q11 11 11 27.5T508-149q-12 12-28.5 12T451-149Zm385-39-75-74q-18 11-38 16.5t-43 5.5q-68 0-114-46t-46-114q0-68 46-114t114-46q68 0 114 46t46 114q0 23-5.5 43T818-319l74 75q11 11 11.5 27.5T892-188q-11 11-28 11t-28-11ZM680-320q34 0 57-23t23-57q0-34-23-57t-57-23q-34 0-57 23t-23 57q0 34 23 57t57 23ZM480-177Z" />
  </svg>
)
