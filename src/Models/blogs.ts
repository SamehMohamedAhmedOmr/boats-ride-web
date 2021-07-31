export interface Blogs {
  id:number,
  title:string,
  description:string,
  image:string,
  thumbnail:string,
  slug:string,
  author:string,
  seo: {
    title:string,
    description:string,
    keywords:[]
  },
}
