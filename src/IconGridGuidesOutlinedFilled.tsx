import React from 'react'
import { IconProps } from './types'

const IconGridGuidesOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M256-200h447l-84-84q-29 21-64.5 32.5T480-240q-39 0-74.5-12T341-285l-85 85Zm-56-57 84-84q-21-29-32.5-64.5T240-480q0-39 12-74.5t33-64.5l-85-85v447Zm142-142 82-81-82-81q-11 18-16.5 38t-5.5 43q0 23 5.5 43t16.5 38Zm138 79q23 0 43-5.5t38-16.5l-81-82-82 82q18 11 38.5 16.5T480-320Zm0-217 81-81q-18-11-38-16.5t-43-5.5q-23 0-43 5.5T399-618l81 81Zm138 138q11-18 16.5-38t5.5-43q0-23-5.5-43.5T618-562l-81 81 81 82Zm142 142v-447l-85 85q21 29 33 64.5t12 74.5q0 39-11.5 74.5T676-341l84 84ZM619-675l85-85H257l84 84q29-21 64.5-32.5T480-720q39 0 74.5 12t64.5 33ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { IconGridGuidesOutlinedFilled as default }
