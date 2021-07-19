export interface WaterSport {
  id:number,
  name:string,
  water_sport_description:string,
  what_to_expect_description:string,
  routes:string,
  slug:string,
  status:string,
  status_name:string,
  code:string,
  color:string,
  corporate_company:string,
  corporate_price:number,
  selling_per_hour:number,
  special_price:number,
  minimum_booking:number,
  apply_vat:number,
  location:string,
  images: [{
    image:string
  }],
  seo: {
    title:string,
    description:string,
    keywords:[]
  },
}
