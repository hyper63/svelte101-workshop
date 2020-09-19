const sh = require('shelljs')
const $ = sh.exec

const posts = [
  '0-setup',
  '1-basics',
  '2-reactivity',
  '3-async',
  '4-stores',
  '5-routing',
  '6-transitions',
  '7-actions',
  '8-testing',
  'z-prereqs'
]

posts.map(p => 
  $(`ipress posts/${p}.md > public/${p}.html`)
)

console.log('build complete')
   

