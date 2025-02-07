import  { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '8d0iihqx', 
  dataset: 'production',    
  useCdn: true,             
  apiVersion: '2023-01-01',
  token:'skFJDvUML53uULdt1vk6ahzuApFgIXczzgLSFPW9AWcBaLh3eOtxUO3VKFEbriLXY52Rkq7wMdkEGuewkbnmQyFKuJLYdsjhLyd6VGUdNcz5liuGzeb5sr9kwLGi7Q7MvYZipuL0BkfV44eoZrbkKFUMVChSA2xEWQGSSyz5SK0Ddc9e14W5'
});

export default sanityClient;
