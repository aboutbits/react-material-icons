import React from 'react'
import { IconProps } from './types'

export const IconCellTowerRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M148-560q0 55 18.5 109.5T221-350q9 11 9 25.5T220-300q-10 10-24.5 9T172-303q-46-57-69-122T80-560q0-70 23-135t69-122q9-11 23.5-12t24.5 9q10 10 10 24.5t-9 25.5q-36 46-54.5 100.5T148-560Zm132 0q0 29 9 59t29 56q8 11 8 25t-10 24q-10 10-24 9.5T269-398q-28-36-42.5-77.5T212-560q0-43 14.5-84.5T269-722q9-11 23-11.5t24 9.5q10 10 9.5 24t-8.5 25q-19 25-28 54.5t-9 60.5Zm107 400-18 54q-4 11-14 18.5T333-80q-20 0-31-15.5t-5-34.5l118-355q-16-14-25.5-33t-9.5-42q0-42 29-71t71-29q42 0 71 29t29 71q0 23-9.5 42T545-485l118 355q6 18-4.5 34T628-80q-12 0-22.5-7T591-106l-17-54H387Zm26-80h134l-67-200-67 200Zm267-320q0-29-9-59t-29-56q-8-11-8-25t10-24q10-10 24.5-9.5T691-722q27 36 41 77.5t16 84.5q0 43-14.5 84.5T691-398q-9 11-23 11.5t-24-9.5q-10-10-9.5-24t8.5-25q19-25 28-54.5t9-60.5Zm132 0q0-55-18.5-109.5T739-770q-9-11-9-25.5t10-24.5q10-10 24.5-9t23.5 12q46 57 69 122t23 135q0 70-21.5 135T789-303q-10 11-24 12.5t-25-9.5q-10-10-10-24.5t9-25.5q36-46 54.5-100.5T812-560Z" />
  </svg>
)
