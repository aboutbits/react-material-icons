import React from 'react'
import { IconProps } from './types'

const IconEjectRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280h480q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200H240q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280Zm15-142 192-288q6-9 14.5-13.5T480-728q10 0 18.5 4.5T513-710l192 288q14 20 2 41t-36 21H289q-24 0-36-21t2-41Z" />
  </svg>
)

export { IconEjectRoundedFilled as default }
