import React from 'react'
import { IconProps } from './types'

const IconSignalCellularConnectedNoInternet4BarTwoTone: React.FC<IconProps> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <g>
          <path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z" />
        </g>
      </g>
    </g>
  </svg>
)

export { IconSignalCellularConnectedNoInternet4BarTwoTone as default }
