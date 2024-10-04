import React from 'react'
import { IconProps } from './types'

const IconDragPanRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-440H235l44 43q12 12 12 29t-12 29q-12 12-29 12t-29-12L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l113-113q12-12 28.5-12t28.5 12q12 12 12 28.5T278-564l-44 44h206v-206l-45 45q-12 12-28 11.5T339-682q-12-12-12-28.5t12-28.5l113-113q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l114 114q12 12 12 28t-12 28q-12 12-28.5 12T565-682l-45-44v206h205l-44-43q-12-12-12-29t12-29q12-12 29-12t29 12l113 113q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L738-338q-12 12-28 11.5T682-339q-12-12-12-28.5t12-28.5l44-44H520v205l43-44q12-12 29-12t29 12q12 12 12 29t-12 29L508-108q-6 6-13 8.5T480-97q-8 0-15-2.5t-13-8.5L338-222q-12-12-11.5-28.5T339-279q12-12 28.5-12t28.5 12l44 45v-206Z" />
  </svg>
)

export { IconDragPanRounded as default }
