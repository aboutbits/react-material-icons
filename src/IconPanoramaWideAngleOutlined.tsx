import React from 'react'
import { IconProps } from './types'

const IconPanoramaWideAngleOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q-91 0-181.5-8.5T120-200q-21-69-30.5-138.5T80-480q0-72 9.5-141.5T120-760q79-20 168-30t192-10q103 0 192 10t168 30q21 69 30.5 138.5T880-480q0 72-10 141.5T840-200q-88 23-178.5 31.5T480-160Zm0-320Zm0 240q75 0 149-6.5T776-270q13-52 18.5-104t5.5-106q0-54-5.5-106T776-690q-65-15-137.5-22.5T480-720q-85 0-157.5 7.5T184-690q-13 52-18.5 104T160-480q0 54 5.5 106T184-270q73 17 147 23.5t149 6.5Z" />
  </svg>
)

export { IconPanoramaWideAngleOutlined as default }
