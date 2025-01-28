import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import productDet from './productDet'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,productDet],
}
