import React from 'react'
import { IconProps } from './types'

const IconHeapSnapshotThumbnailOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm600-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm0 320q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720ZM420-320q25 0 42.5-17.5T480-380q0-25-17.5-42.5T420-440q-25 0-42.5 17.5T360-380q0 25 17.5 42.5T420-320Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T280-580q0-25-17.5-42.5T220-640q-25 0-42.5 17.5T160-580q0 25 17.5 42.5T220-520Z" />
  </svg>
)

export { IconHeapSnapshotThumbnailOutlinedFilled as default }
