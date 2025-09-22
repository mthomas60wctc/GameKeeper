import { Dark } from 'quasar'

export default () => {
  // Set dark mode as default
  Dark.set(true)
  
  // Optional: Check if user has a preference stored in localStorage
  // const darkMode = localStorage.getItem('darkMode')
  // if (darkMode !== null) {
  //   Dark.set(JSON.parse(darkMode))
  // } else {
  //   Dark.set(true) // Default to dark mode
  // }
}