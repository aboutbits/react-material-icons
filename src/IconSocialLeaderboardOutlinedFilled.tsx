import React from 'react'
import { IconProps } from './types'

export const IconSocialLeaderboardOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M299-120q-91 0-155-64T80-339q0-86 57.5-148.5T281-557L120-880h280l80 160 80-160h280L680-559q85 8 142.5 70.5T880-340q0 92-64 156t-156 64q-9 0-18.5-.5T623-123q55-36 86-93.5T740-340q0-109-75.5-184.5T480-600q-109 0-184.5 75.5T220-340q0 68 28 128t88 89q-9 2-18.5 2.5t-18.5.5Zm181-40q-75 0-127.5-52.5T300-340q0-75 52.5-127.5T480-520q75 0 127.5 52.5T660-340q0 75-52.5 127.5T480-160Zm-74-70 74-56 74 56-28-91 74-53h-91l-29-96-29 96h-91l74 53-28 91Z" />
  </svg>
)
