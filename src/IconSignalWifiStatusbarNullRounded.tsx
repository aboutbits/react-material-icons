import React from 'react'
import { IconProps } from './types'

const IconSignalWifiStatusbarNullRounded: React.FC<IconProps> = ({
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
      <path d="M12,4C7.7,4,3.78,5.6,0.79,8.24C0.35,8.63,0.32,9.3,0.73,9.71l10.56,10.58c0.39,0.39,1.02,0.39,1.42,0L23.27,9.71 c0.41-0.41,0.38-1.08-0.06-1.47C20.22,5.6,16.3,4,12,4z M2.92,9.07C5.51,7.08,8.67,6,12,6c3.33,0,6.49,1.08,9.08,3.07L12,18.17 L2.92,9.07z" />
    </g>
  </svg>
)

export { IconSignalWifiStatusbarNullRounded as default }
