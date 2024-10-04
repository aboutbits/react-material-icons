import React from 'react'
import { IconProps } from './types'

const IconDisabledVisibleSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M450-81q-78-6-145.5-39T187-206.5q-50-53.5-78.5-124T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v19q-17-11-39.5-21.5T799-500q-8-126-99.5-213T480-800q-56 0-105.5 18T284-732l245 245q-19 8-36.5 18.5T458-446L228-676q-32 41-50 90.5T160-480q0 99 53.5 177.5T352-187q18 28 45 57t53 49Zm230-79q59 0 109.5-27t80.5-73q-30-46-80.5-73T680-360q-59 0-109.5 27T490-260q30 46 80.5 73T680-160Zm0 80q-96 0-171.5-50.5T400-260q33-79 108.5-129.5T680-440q96 0 171.5 50.5T960-260q-33 79-108.5 129.5T680-80Zm0-120q-25 0-42.5-17.5T620-260q0-25 17.5-42.5T680-320q25 0 42.5 17.5T740-260q0 25-17.5 42.5T680-200Z" />
  </svg>
)

export { IconDisabledVisibleSharpFilled as default }
