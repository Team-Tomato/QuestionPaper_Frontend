import SearchQP from './Views/searchQP.js'
import TemplateQP from './Views/templateQP.js'
import Contributors from './Views/contributors.js'
import Contact from './Views/contact.js'

const Routes = [
    {
      path: "/searchQP",
      name: "searchQP",
      component: SearchQP
    },
    {
      path: "/templateQP",
      name: "templateQP",
      component: TemplateQP
    },
    {
      path: "/contributors",
      name: "Contributors",
      component: Contributors
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ];
  
export default Routes;