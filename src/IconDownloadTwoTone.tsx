import React from 'react'
import { IconProps } from './types'

const IconDownloadTwoTone: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z" opacity=".3" />
    <path d="M15 9V3H9v6H5l7 7 7-7h-4zm-3 4.17L9.83 11H11V5h2v6h1.17L12 13.17zM5 18h14v2H5z" />
  </svg>
)

export { IconDownloadTwoTone as default }
