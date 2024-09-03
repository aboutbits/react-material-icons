import React from 'react'
import { IconProps } from './types'

const IconBarcodeReaderRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h320q45 0 68 38t3 78l-80 160q-11 20-29.5 32T520-520h-81l-11 40h12q17 0 28.5 11.5T480-440v80q0 17-11.5 28.5T440-320h-54l-30 112q-11 39-43 63.5T240-120Zm0-80q14 0 24-8t14-21l78-291h-83l-72 270q-5 19 7 34.5t32 15.5Zm40-400h240l80-160H280q-33 0-56.5 23.5T200-680q0 33 23.5 56.5T280-600Zm597-213-90 41q-11 5-22.5.5T748-787q-5-11-1-22.5t15-16.5l90-41q11-5 23-.5t17 15.5q5 11 .5 22.5T877-813ZM763-533q-11-5-16-17t0-23q5-12 17-16t24 1l90 42q11 5 15 16.5t-1 22.5q-5 11-16.5 15.5T853-492l-90-41Zm127-117H790q-13 0-21.5-8.5T760-680q0-13 8.5-21.5T790-710h100q13 0 21.5 8.5T920-680q0 13-8.5 21.5T890-650Zm-490-30Zm-85 160Z" />
  </svg>
)

export { IconBarcodeReaderRounded as default }
