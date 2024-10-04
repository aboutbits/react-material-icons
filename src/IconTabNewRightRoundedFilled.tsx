import React from 'react'
import { IconProps } from './types'

const IconTabNewRightRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M767-160H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L788-68q-11 11-27.5 11.5T732-68q-11-11-11-28t11-28l35-36ZM440-440v120q0 17 11.5 28.5T480-280q17 0 28.5-11.5T520-320v-120h120q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H520v-120q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v120H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440h120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v286q0 18-14 29.5t-32 7.5q-57-8-110 9t-94 58q-40 40-58 94t-10 110q2 18-8.5 32T486-120H200Z" />
  </svg>
)

export { IconTabNewRightRoundedFilled as default }
