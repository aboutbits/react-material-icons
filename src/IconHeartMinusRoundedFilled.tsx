import React from 'react'
import { IconProps } from './types'

const IconHeartMinusRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h240q17 0 28.5 11.5T920-440q0 17-11.5 28.5T880-400H640ZM440-147q-14 0-28-5t-25-16q-44-40-104-91T169-368.5Q115-427 77.5-491T40-621q0-94 63-156.5T260-840q52 0 99 21.5t81 61.5q34-40 81-61.5t99-21.5q63 0 111.5 29.5T808-736q11 19-3.5 38.5T763-680h-16q-85 0-156 68.5T520-440q0 42 13.5 79.5T576-292q11 12 9.5 28T572-237l-79 70q-11 11-25 15.5t-28 4.5Z" />
  </svg>
)

export { IconHeartMinusRoundedFilled as default }
