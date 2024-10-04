import React from 'react'
import { IconProps } from './types'

const IconEditSquareRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-360q-17 0-28.5-11.5T360-400v-97q0-16 6-30.5t17-25.5l344-344q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L553-384q-11 11-25.5 17.5T497-360h-97Zm384-368 57-56-56-56-57 56 56 56ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h260q14 0 23 7t14 18q5 11 3.5 22T489-772L303-586q-11 11-17 25.5t-6 30.5v170q0 33 23.5 56.5T360-280h169q16 0 30.5-6t25.5-17l187-187q10-10 21-11.5t22 3.5q11 5 18 14t7 23v261q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { IconEditSquareRoundedFilled as default }
