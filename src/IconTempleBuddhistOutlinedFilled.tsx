import React from 'react'
import { IconProps } from './types'

const IconTempleBuddhistOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m330-720 150-200 150 200H330Zm-90 160v-46q-52-13-86-55t-34-98h80q0 32 23.5 55.5T279-680h402q32 0 55.5-23.5T760-759h80q0 56-34 98t-86 55v46H240ZM160-80v-366q-52-13-86-55t-34-98h80q0 32 23.5 55.5T199-520h562q32 0 55.5-23.5T840-599h80q0 56-34 98t-86 55v366H520v-160q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v160H160Z" />
  </svg>
)

export { IconTempleBuddhistOutlinedFilled as default }
