import React from 'react'
import { IconProps } from './types.js'

export const IconRowingRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m692-28-80-80q-6-6-9-13.5t-3-15.5v-43L316-464q-9 2-18 3t-18 1v-88q50 2 102-21.5t84-58.5l56-62q13-15 30.5-22.5T590-720q38 0 64 26t26 64v230q0 26-9.5 47.5T644-314L500-456v-92q-20 17-43 31t-49 25l252 252h43q8 0 15.5 3t13.5 9l80 80q12 12 12 28t-12 28l-64 64q-12 12-28 12t-28-12ZM360-280 250-170q-13 13-30 13t-30-13q-13-13-13-30t13-30l150-150 100 100h-80Zm240-480q-33 0-56.5-23.5T520-840q0-33 23.5-56.5T600-920q33 0 56.5 23.5T680-840q0 33-23.5 56.5T600-760ZM280-460q-18 0-31-13t-13-31q0-18 13-31t31-13q18 0 31 13t13 31q0 18-13 31t-31 13Z" />
  </svg>
)