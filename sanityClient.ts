import  { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '8d0iihqx', 
  dataset: 'production',    
  useCdn: true,             
  apiVersion: '2023-01-01',  
});

export default sanityClient;
