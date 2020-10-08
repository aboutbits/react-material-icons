import React from 'react'
import { IconProps } from './types'

const IconRoofing: React.FC<IconProps> = ({
  title = 'IconRoofing',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <rect fill="none" height="24" width="24" />
    <path d="M13,18h-2v-2h2V18z M15,14H9v6h6V14L15,14z M19,9.3L19,9.3V4h-3v2.6v0L12,3L2,12h3l7-6.31L19,12h3L19,9.3z" />
  </svg>
)

export { IconRoofing as default }
