import React from 'react'
import { IconProps } from './types'

export const IconEditSquareRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h261q20 0 30 12.5t10 27.5q0 15-10.5 27.5T460-760H200v560h560v-261q0-20 12.5-30t27.5-10q15 0 27.5 10t12.5 30v261q0 33-23.5 56.5T760-120H200Zm280-360Zm-120 80v-97q0-16 6-30.5t17-25.5l344-344q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L553-384q-11 11-25.5 17.5T497-360h-97q-17 0-28.5-11.5T360-400Zm481-384-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
  </svg>
)
