import React from 'react'
import { IconProps } from './types'

const IconLandscape2Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M184-436q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l86-287q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l155 444q7 20-5.5 36.5T858-160q-12 0-22-7.5T821-187L666-632q-8-23-25-35.5T601-680q-23 0-40.5 13T535-631l-86 287q-9 28-32.5 46T363-280q-27 0-50-14.5T280-335l-27-66-107 219q-5 10-15 16t-21 6q-23 0-34-19t-1-39l109-218Zm56-124q-50 0-85-35.5T120-680q0-50 35-85t85-35q50 0 85 35t35 85q0 49-35 84.5T240-560Zm0-80q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm123 360ZM240-680Z" />
  </svg>
)

export { IconLandscape2Rounded as default }