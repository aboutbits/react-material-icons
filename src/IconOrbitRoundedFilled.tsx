import React from 'react'
import { IconProps } from './types.js'

export const IconOrbitRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-100q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 22-6.5 42.5T354-159v-27q30 13 62 19.5t64 6.5q123 0 212.5-80T797-439q2-17 14-29t29-12q17 0 28.5 12t9.5 29q-16 152-129 255.5T480-80q-45 0-88-9.5T309-118q-16 9-33.5 13.5T240-100Zm240-240q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-460q-123 0-212.5 80T163-521q-2 17-14 29t-29 12q-17 0-28.5-12T82-521q16-152 129-255.5T480-880q45 0 88 9.5t83 28.5q16-9 33.5-13.5T720-860q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99q0-22 6.5-42.5T606-801v27q-30-13-62-19.5t-64-6.5Z" />
  </svg>
)