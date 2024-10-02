import React from 'react'
import { IconProps } from './types'

export const IconSpaSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-94-12-168-48t-125.5-94Q135-280 108-356.5T81-526q110 11 186 40t123.5 82Q438-351 459-271.5T480-80Zm0-337q-23-35-62.5-69T326-548q6-42 20-87t34-88.5q20-43.5 45.5-83.5t54.5-73q29 33 54.5 73t45.5 83.5q20 43.5 34 88.5t20 87q-52 27-91.5 61T480-417Zm80 321q-2-70-10.5-129.5T523-338q47-81 129.5-132T879-526q1 158-84.5 272.5T560-96Z" />
  </svg>
)
