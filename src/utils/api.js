import dotenv from '../.env'
console.log(dotenv)
const hello = process.env.LOCAL_API || 8080
console.log(process)
// console.log(hello)
export default hello