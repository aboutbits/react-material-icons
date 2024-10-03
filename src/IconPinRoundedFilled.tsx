import React from 'react'
import { IconProps } from './types.js'

export const IconPinRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm123-200q10 0 16.5-6.5T306-383v-191q0-11-7.5-18.5T280-600q-5 0-9.5 1.5T262-594l-45 32q-7 5-8.5 13t3.5 16q5 8 13.5 9.5T242-527l18-13v157q0 10 6.5 16.5T283-360Zm121 0h116q8 0 14-6t6-14q0-8-6-14t-14-6h-74l-2-2q21-20 34.5-34t21.5-22q18-18 27-36t9-38q0-29-22-48.5T458-600q-20 0-38 9.5T391-564q-5 7-1 15t12 11q8 3 16 0t14-9q5-5 11.5-8t14.5-3q15 0 24.5 8t9.5 20q0 11-4 20.5T470-486l-13 13-19 19-48 48q-2 2-6 14v12q0 8 6 14t14 6Zm276 0q36 0 58-20t22-52q0-18-10-32t-28-22v-2q14-8 22-20.5t8-29.5q0-27-21-44.5T678-600q-20 0-37 9.5T613-567q-5 7-1 14t12 11q8 3 16 .5t14-8.5q5-5 11-7.5t13-2.5q13 0 21.5 7.5T708-534q0 14-10 22t-26 8q-8 0-14 6t-6 14q0 8 6 14t14 6q20 0 32 8t12 22q0 13-11 22.5t-25 9.5q-12 0-20-4t-14-13q-5-7-12.5-9.5t-15.5.5q-9 4-13 11.5t0 15.5q11 20 30 30.5t45 10.5Z" />
  </svg>
)
