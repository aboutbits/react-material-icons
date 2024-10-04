import React from 'react'
import { IconProps } from './types'

const IconUlnaRadiusAltOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-449 44-70 316 297q12 11 26.5 16.5T495-200q12 0 23-3.5t20-8.5l342-216v94L580-145q-19 12-40.5 18.5T494-120q-30 0-58-11.5T385-164L80-449Zm430 189q17 0 28.5-11.5T550-300q0-2-4-17l142-89q5 8 13.5 12t18.5 4q17 0 28.5-11.5T760-430q0-14-9-25t-23-14q1-2 1.5-5t.5-6q0-17-11.5-28.5T690-520q-17 0-28.5 11.5T650-480q0 4 7 22l-142 88q-5-9-14.5-14.5T480-390q-17 0-28.5 11.5T440-350q0 14 9 25t23 14q-1 2-1.5 5t-.5 6q0 17 11.5 28.5T510-260ZM257-732l43-68q75 37 139 101.5T535-564q36-38 79.5-60.5T736-668q46-13 79.5-25t64.5-27v88q-27 11-56.5 21T757-591q-84 22-125.5 49T554-458q-5 8-14 13t-20 5q-14 0-25-9t-14-22q-18-76-80.5-149T257-732ZM124-519q72 67 158 148.5T440-222q12 11 26.5 16.5T495-200q12 0 23-3.5t20-8.5q63-39 165-103.5T880-428L538-212q-9 5-20 8.5t-23 3.5q-14 0-28.5-5.5T440-222L124-519Z" />
  </svg>
)

export { IconUlnaRadiusAltOutlined as default }
