import React from 'react'
import { IconProps } from './types'

const IconArrowTopRightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M647-560H280v360q0 17-11.5 28.5T240-160q-17 0-28.5-11.5T200-200v-360q0-33 23.5-56.5T280-640h367L532-755q-12-12-12.5-28.5T531-812q12-12 28.5-12t28.5 12l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L587-387q-12 12-28 11.5T531-388q-11-12-11.5-28t11.5-28l116-116Z" />
  </svg>
)

export { IconArrowTopRightRounded as default }
