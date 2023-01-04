// sanityClient: import the sanityClient module to establish a connection to the Sanity content management system
import sanityClient from '@sanity/client'

// imageUrlBuilder: import the imageUrlBuilder module to generate image URLs for Sanity assets
import imageUrlBuilder from '@sanity/image-url'

// client: create a Sanity client instance with project and dataset information, as well as optional configuration options
// - projectId: the unique identifier for the Sanity project
// - dataset: the dataset to use within the project (e.g. "production")
// - apiVersion: the version of the Sanity API to use (e.g. "2022-12-30")
// - useCdn: boolean indicating whether to use the Sanity CDN for asset delivery
// - token: an optional authentication token for private projects
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-12-30',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_PROJECT_ID,
})

// builder: create an imageUrlBuilder instance using the Sanity client instance
const builder = imageUrlBuilder(client)

// urlFor: a function that generates an image URL for a given Sanity asset
// - source: an object representing the Sanity asset, including a "url" property with the asset's file path
// Returns a URL string for the asset
export const urlFor = (source) => builder.image(source)
