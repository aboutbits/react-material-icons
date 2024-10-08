import React from 'react'
import { IconProps } from './types'

const IconStackedEmailSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280v-560h720v560H200ZM40-120v-580h80v500h660v80H40Zm520-349 280-194v-97L560-566 280-760v97l280 194Z" />
  </svg>
)

export { IconStackedEmailSharpFilled as default }
