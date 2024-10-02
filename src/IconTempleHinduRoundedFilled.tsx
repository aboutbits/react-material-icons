import React from 'react'
import { IconProps } from './types'

export const IconTempleHinduRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m312-680 47-155v-45q0-17 11.5-28.5T399-920q17 0 28.5 11.5T439-880v40h81v-40q0-17 11.5-28.5T560-920q17 0 28.5 11.5T600-880v40l48 160H312ZM80-160v-320q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480v40h640v-40q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480v320q0 33-23.5 56.5T800-80H560q-17 0-28.5-11.5T520-120v-120q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v120q0 17-11.5 28.5T400-80H160q-33 0-56.5-23.5T80-160Zm184-360 24-80h384l24 80H264Z" />
  </svg>
)
