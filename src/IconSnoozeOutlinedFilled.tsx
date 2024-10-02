import React from 'react'
import { IconProps } from './types'

export const IconSnoozeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M380-334h200v-60H468l112-126v-54H380v60h114L380-386v52ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56Z" />
  </svg>
)
