import React from 'react'
import { IconProps } from './types'

const IconSynagogueOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-640v-40q0-33 23.5-56.5T840-760q33 0 56.5 23.5T920-680v40H760Zm-720 0v-40q0-33 23.5-56.5T120-760q33 0 56.5 23.5T200-680v40H40Zm0 520v-480h160v480H40Zm200 0v-520l240-200 240 200v520H560v-200q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320v200H240Zm520 0v-480h160v480H760ZM480-500q25 0 42.5-17.5T540-560q0-25-17.5-42.5T480-620q-25 0-42.5 17.5T420-560q0 25 17.5 42.5T480-500Z" />
  </svg>
)

export { IconSynagogueOutlinedFilled as default }
