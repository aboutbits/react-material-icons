import React from 'react'
import { IconProps } from './types.js'

export const IconDrawCollageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M603-160h56v-83l102-24q21-5 43.5-11.5T827-299q0-8-8-14.5T792-326q-38-11-58-34t-18-49q2-21 19.5-37.5T785-474q28-10 41.5-22.5T840-526q0-20-17-30.5t-37-3.5q-6 2-12.5 3t-12.5 1q-26 0-43.5-20T700-625q0-26 13.5-47.5T727-720q0-17-14.5-28.5T677-760q-29 0-40.5 12.5T625-700q0 17 1.5 33t1.5 33q0 45-16 66t-50 21q-11 0-23-3t-23-3q-6 0-9.5 2.5T503-543q0 10 12 20t23 19q26 23 38 44t12 42q0 27-19.5 46T521-353q-11 0-21-2t-21-3q-28-2-43 5t-15 21q0 14 13 23t38 13l131 21v115Zm-450 40-73-33 200-440 73 33-200 440Zm370 40v-128l-57-8q-55-8-89.5-39.5T342-329q0-48 39.5-80.5T476-439q5 0 8.5.5t7.5 1.5q-8-8-15-14.5T464-465q-20-22-29-40.5t-9-37.5q0-38 21.5-62.5T504-630q7 0 19 .5t26 2.5q2-20 0-41t-2-41q0-63 34-97t97-34q56 0 93.5 32t36.5 78q0 23-8 45t-18 43q5-1 10.5-1.5t10.5-.5q48 0 82.5 34.5T920-525q0 43-30.5 77.5T818-402q7 2 13 4t12 5q29 14 47 39.5t18 55.5q0 38-33.5 66.5T779-188l-40 10v98H523ZM138-537q-29-29-43.5-65.5T80-679q0-84 58-142.5T280-880q40 0 76.5 15t65.5 44l-56 56q-17-17-39.5-26t-46.5-9q-50 0-85 35t-35 85q0 24 9 46.5t26 39.5l-57 57Zm493 128Z" />
  </svg>
)
