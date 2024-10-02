import React from 'react'
import { IconProps } from './types'

export const IconFoldedHandsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M590-80q-11 0-20.5-5.5T555-100l-35-62q-5-9-7.5-18.5T510-201v-299q0-21 8-39t27-18q8 0 14.5 4t10.5 12l60 109v82q0 13 8.5 21.5T660-320q13 0 21.5-8.5T690-350v-77q0-10-2.5-20t-7.5-19L527-745q-15-28-15-59t16-58q13-15 32-16t31 13l232 265q8 10 13 21.5t6 24.5l35 431q2 17-10.5 30T837-80H590Zm-467 0q-17 0-29.5-13T83-123l35-431q1-13 6-24.5t13-21.5l232-264q12-14 30.5-13.5T430-863q16 28 17 59t-14 59L280-466q-5 9-7.5 19t-2.5 20v77q0 13 8.5 21.5T300-320q13 0 21.5-8.5T330-350v-82l60-109q4-8 11-12t15-4q18 0 26 18t8 39v299q0 11-2.5 20.5T440-162l-35 62q-5 9-14.5 14.5T370-80H123Z" />
  </svg>
)
