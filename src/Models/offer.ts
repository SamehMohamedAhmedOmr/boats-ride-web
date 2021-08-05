export interface Offer {
  id:number,
  title:string,
  description:string,
  valid_date:string,
  is_active:boolean,
  image:string,
  slug:string,
  seo: {
    title:string,
    description:string,
    keywords:[]
  },
}
