import React from 'react'
import { IconProps } from './types.js'

export const IconCinematicBlurRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m160-840 65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h80l65 130q7 14 20 22t28 8q30 0 46-25.5t2-52.5l-41-82h120q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840Zm192 600h256q13 0 22-9t8-23q-2-18-13-34t-29-27q-22-14-51-20.5t-65-6.5q-36 0-65 6.5T364-333q-18 11-29 27t-13 34q-2 13 7 22.5t23 9.5Zm128-160q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Z" />
  </svg>
)
