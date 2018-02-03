// import createSchema from 'part:@sanity/base/schema-creator'
// import schemaTypes from 'all:part:@sanity/base/schema-type'
// import blockContent from './blockContent'
// import crewMember from './crewMember'
// import castMember from './castMember'
// import movie from './movie'
// import person from './person'
// import screening from './screening'
//
// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([blockContent, castMember, crewMember, movie, person, screening])
// })

const createSchema = require('part:@sanity/base/schema-creator')
const schemaTypes = require('all:part:@sanity/base/schema-type')
import product from './product'

module.exports = createSchema({
  name: 'default',
  types: schemaTypes.concat([product])
})
