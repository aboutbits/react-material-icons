import React from 'react'
import { IconProps } from './types'

export const IconBedtimeOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m766-195-57-57q17-16 31-34.5t25-38.5q-48-5-94-18t-88-35L376-585q-22-42-35-87.5T324-766q-20 11-38.5 25T251-710l-56-56q43-44 97.5-73T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-11 63-40.5 117.5T766-195ZM735 2 627-106q-34 13-69.5 19.5T484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-38 6.5-73.5T106-627L-1-734l57-57L792-55 735 2ZM484-160q20 0 40-2.5t39-7.5L170-563q-5 20-7.5 39.5T160-484q0 135 94.5 229.5T484-160ZM366-367Zm114-114Z" />
  </svg>
)
