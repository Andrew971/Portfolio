import Home from './home'
import Skills from './skills'

export default {
  name: 'Section',
  description: 'section',
  field: [
   ...Home,
   ...Skills
  ]
}