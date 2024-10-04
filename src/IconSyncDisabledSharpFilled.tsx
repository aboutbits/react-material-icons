import React from 'react'
import { IconProps } from './types.js'

export const IconSyncDisabledSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 643-205q-19 11-39.5 20T560-170v-84q6-2 12-4.5t12-5.5L264-584q-11 25-17.5 51.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160v-80h110l-16-14q-49-49-71.5-106.5T160-478q0-45 11.5-86.5T205-643L56-792l57-57 736 736-57 57Zm-35-263-60-60q11-24 17-50t6-53q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 45-11.5 85.5T757-319ZM379-697l-60-60q19-11 39-19t42-14v84q-5 2-10.5 4t-10.5 5Z" />
  </svg>
)