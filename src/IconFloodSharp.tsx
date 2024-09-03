import React from 'react'
import { IconProps } from './types'

const IconFloodSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80q38 0 56.5-20t77.5-20q59 0 77 20t56 20q38 0 56-20t77-20q57 0 77.5 20t56.5 20q38 0 56-20t77-20q59 0 77 20t56 20v80q-58 0-77-20t-56-20q-37 0-56 20t-77 20q-58 0-77.5-20T480-120q-38 0-56 20t-77 20q-59 0-77-20t-56-20q-37 0-56 20T80-80Zm267-180q-57 0-77-20t-56-20q-35 0-56 20t-78 20v-80q38 0 56-20t77-20q6 0 12 .5t11 1.5l-38-140-55 72-63-50 311-384 461 176-29 75-84-34 81 301q14 8 27.5 15t32.5 7v80q-57-1-77-20.5T747-300q-38 0-56 20t-77 20q-57 0-77.5-20T480-300q-38 0-56 20t-77 20Zm0-80q30 0 46.5-14t50.5-22l-37-136 155-41 56 212q31-2 49-18.5t65-19.5l-86-321-229-84-157 188 69 254q4 1 8.5 1.5t9.5.5Zm149-222Z" />
  </svg>
)

export { IconFloodSharp as default }
