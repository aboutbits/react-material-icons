import React from 'react'
import { IconProps } from './types'

const IconSignalWifiStatusbarConnectedNoInternet4Sharp: React.FC<IconProps> = ({
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
        <rect height="2" width="2" x="19" y="18" />
        <rect height="6" width="2" x="19" y="10" />
        <path d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21l5-5.01V8h5.92C19.97,5.51,16.16,4,12,4z" />
      </g>
    </g>
  </svg>
)

export { IconSignalWifiStatusbarConnectedNoInternet4Sharp as default }
