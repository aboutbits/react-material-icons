import React from 'react'
import { IconProps } from './types'

const IconChaletRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-660h-36l-44 44q-6 6-14 6t-14-6q-6-6-6-14t6-14l16-16h-28q-8 0-14-6t-6-14q0-8 6-14t14-6h28l-16-16q-6-6-6-14t6-14q6-6 14-6t14 6l44 44h36v-36l-44-44q-6-6-6-14t6-14q6-6 14-6t14 6l16 16v-28q0-8 6-14t14-6q8 0 14 6t6 14v28l16-16q6-6 14-6t14 6q6 6 6 14t-6 14l-44 44v36h36l44-44q6-6 14-6t14 6q6 6 6 14t-6 14l-16 16h28q8 0 14 6t6 14q0 8-6 14t-14 6h-28l16 16q6 6 6 14t-6 14q-6 6-14 6t-14-6l-44-44h-36v36l44 44q6 6 6 14t-6 14q-6 6-14 6t-14-6l-16-16v28q0 8-6 14t-14 6q-8 0-14-6t-6-14v-28l-16 16q-6 6-14 6t-14-6q-6-6-6-14t6-14l44-44v-36Zm-85 328-15-15v147q0 17-11.5 28.5T560-160H240q-17 0-28.5-11.5T200-200v-148l-16 16q-11 11-28 11t-28-11q-11-11-11-28t11-28l215-215q23-23 57-23t57 23l215 215q11 11 11 27.5T672-332q-12 12-28.5 12T615-332Zm-335 92h80v-80q0-17 11.5-28.5T400-360q17 0 28.5 11.5T440-320v80h80v-187L400-547 280-427v187Zm0 0h240-240Z" />
  </svg>
)

export { IconChaletRounded as default }
