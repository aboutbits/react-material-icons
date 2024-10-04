import React from 'react'
import { IconProps } from './types.js'

export const IconBackHandRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M512-40q-82 0-154-37.5T240-182L63-442q-7-10-5.5-21.5T67-483q20-21 49.5-24t53.5 14l110 76v-383q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v460q0 24-21.5 35.5T297-307l-85-59 95 138q35 51 89 79.5T512-120q103 0 175.5-72.5T760-368v-392q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v392q0 137-95.5 232.5T512-40Zm-32-880q17 0 28.5 11.5T520-880v360q0 17-11.5 28.5T480-480q-17 0-28.5-11.5T440-520v-360q0-17 11.5-28.5T480-920Zm160 40q17 0 28.5 11.5T680-840v320q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-320q0-17 11.5-28.5T640-880ZM486-300Z" />
  </svg>
)
