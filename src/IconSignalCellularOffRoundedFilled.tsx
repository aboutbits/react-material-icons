import React from 'react'
import { IconProps } from './types'

export const IconSignalCellularOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M177-80q-27 0-37.5-24.5T148-148l276-276-300-299q-12-11-11.5-27.5T124-779q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T859-44q-12 11-28 11.5T803-44l-36-36H177Zm703-703v494q0 18-12 29.5T840-248q-8 0-15-3t-13-9L564-508q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l248-248q19-19 43.5-8.5T880-783Z" />
  </svg>
)
