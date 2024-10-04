import React from 'react'
import { IconProps } from './types'

const IconRateReviewRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-400h66q8 0 15.5-3t13.5-9l187-188q9-9 13.5-20.5T580-643q0-11-4.5-21.5T563-684l-37-38q-9-9-20-13.5t-23-4.5q-11 0-22 4.5T441-722L252-535q-6 6-9 13.5t-3 15.5v66q0 17 11.5 28.5T280-400Zm202-204-38-37 39-39 37 38-38 38Zm-34 204h232q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480H528l-80 80ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Z" />
  </svg>
)

export { IconRateReviewRoundedFilled as default }
