import React from 'react'
import { IconProps } from './types'

export const IconConstructionRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M714-162 537-339l84-84 177 177q17 17 17 42t-17 42q-17 17-42 17t-42-17Zm-552 0q-17-17-17-42t17-42l234-234-68-68q-11 11-28 11t-28-11l-23-23v90q0 14-12 19t-22-5L106-576q-10-10-5-22t19-12h90l-22-22q-12-12-12-28t12-28l114-114q20-20 43-29t47-9q20 0 37.5 6t34.5 18q8 5 8.5 14t-6.5 16l-76 76 22 22q11 11 11 28t-11 28l68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q8 0 15 .5t14 2.5q9 3 11.5 12.5T737-809l-65 65q-6 6-6 14t6 14l44 44q6 6 14 6t14-6l65-65q7-7 16.5-5t12.5 12q2 7 2.5 14t.5 15q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L246-162q-17 17-42 17t-42-17Z" />
  </svg>
)
