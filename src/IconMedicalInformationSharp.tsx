import React from 'react'
import { IconProps } from './types'

const IconMedicalInformationSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M22,7h-7V2H9v5H2v15h20V7z M11,4h2v5h-2V4z M11,16H9v2H7v-2H5v-2h2v-2h2v2h2V16z M13,14.5V13h6v1.5H13z M13,17.5V16h4v1.5 H13z" />
    </g>
  </svg>
)

export { IconMedicalInformationSharp as default }
