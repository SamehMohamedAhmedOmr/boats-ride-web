export interface Services {
  id:number,
  name: string,
  description: string,
  price:number,
  slug:string,
  image: string,
  seo: {
    title:string,
    description:string,
    keywords:[]
  },
}
