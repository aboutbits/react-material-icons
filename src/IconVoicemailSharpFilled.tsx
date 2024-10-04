import React from 'react'
import { IconProps } from './types'

const IconVoicemailSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-320q-75 0-127.5-52.5T80-500q0-75 52.5-127.5T260-680q75 0 127.5 52.5T440-500q0 27-8 52t-22 48h140q-14-23-22-48t-8-52q0-75 52.5-127.5T700-680q75 0 127.5 52.5T880-500q0 75-52.5 127.5T700-320H260Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm440 0q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" />
  </svg>
)

export { IconVoicemailSharpFilled as default }
