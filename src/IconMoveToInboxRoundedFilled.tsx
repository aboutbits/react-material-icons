import React from 'react'
import { IconProps } from './types.js'

export const IconMoveToInboxRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-200q32 0 59-16.5t44-43.5q6-9 15-14.5t20-5.5h142v-360H200v360h142q11 0 20 5.5t15 14.5q17 27 44 43.5t59 16.5Zm-40-234v-126q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680v126l35-35q6-6 13.5-9t15-2.5q7.5.5 15 3.5t13.5 9q11 12 11.5 28T612-532L508-428q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L348-532q-6-6-9-13.5t-3-15q0-7.5 3-14.5t9-13q12-12 28.5-12.5T405-589l35 35Z" />
  </svg>
)