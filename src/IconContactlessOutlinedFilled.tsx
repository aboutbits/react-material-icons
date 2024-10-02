import React from 'react'
import { IconProps } from './types'

export const IconContactlessOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M336-374q9-24 14.5-50.5T356-480q0-29-5.5-55.5T336-586l-74 30q6 18 10 37t4 39q0 20-4 39t-10 37l74 30Zm128 54q17-38 24.5-78t7.5-82q0-42-7.5-82T464-640l-74 30q14 30 20 62.5t6 67.5q0 35-6 67.5T390-350l74 30Zm130 54q21-50 31.5-103.5T636-480q0-57-10.5-110.5T594-694l-74 32q18 42 27 88t9 94q0 48-9 94t-27 88l74 32ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
