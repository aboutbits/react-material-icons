import React from 'react'
import { IconProps } from './types'

const IconMacroOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M794-265 665-394q39-22 83-34t92-12q0 48-12 92t-34 83Zm54 168-57 57-105-105q-44 31-96.5 48T480-80q0-57 17-109.5t48-96.5l-74-74q-36-3-65-24t-42-54q-5 0-9 .5t-9 .5q-53 0-89.5-36.5T220-563q0-11 1.5-21t5.5-20L55-776l57-57L848-97ZM480-920q38 0 70 21.5t46 56.5q5 0 9-.5t9-.5q52 0 88.5 37t36.5 89q0 21-6.5 40.5T712-640q13 17 20 36.5t7 40.5q0 50-33.5 86.5T622-437L513-546q29-11 48-36.5t19-57.5q0-42-29-71t-71-29q-32 0-57.5 19T386-673L255-804q21-22 50-31t59-7q14-35 46-56.5t70-21.5Zm0 840q0-74-28.5-139.5T374-334q-49-49-114.5-77.5T120-440q0 74 28.5 139.5T226-186q49 49 114.5 77.5T480-80Z" />
  </svg>
)

export { IconMacroOffSharpFilled as default }
