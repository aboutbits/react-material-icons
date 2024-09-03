import React from 'react'
import { IconProps } from './types'

const IconTableBarRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m260-211 40-99q9-23 29-36.5t45-13.5h66v-161q-153-5-256.5-45T80-660q0-58 117-99t283-41q167 0 283.5 41T880-660q0 54-103.5 94T520-521v161h66q24 0 44.5 13.5T660-310l40 99q8 18-3.5 34.5T665-160q-11 0-20-6t-14-17l-39-97H368l-39 97q-5 11-14 17t-20 6q-20 0-31.5-16.5T260-211Z" />
  </svg>
)

export { IconTableBarRoundedFilled as default }
