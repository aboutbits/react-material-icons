import React from 'react'
import { IconProps } from './types'

export const IconPictureInPictureOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M790-57 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80H126l-72-72q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57Zm22-205L634-440h66q25 0 42.5-17.5T760-500v-120q0-25-17.5-42.5T700-680H500q-22 0-38 13.5T441-633l-99-99q-19-19-8.5-43.5T371-800h429q33 0 56.5 23.5T880-720v429q0 27-24.5 37.5T812-262Z" />
  </svg>
)
