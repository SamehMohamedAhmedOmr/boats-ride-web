export interface Yacht {
  id:number,
  slug:string,
  name:string,
  what_is_included:string,
  facilities:string,
  what_expect_description:string,
  type:string,
  status:string,
  status_name:string,
  code:string,
  color:string,
  passenger_capacity:number,
  size:number,
  no_of_captain:number,
  crew_members:number,
  corporate_company:string,
  corporate_price:number,
  selling_per_hour:number,
  yacht_special_price:number,
  minimum_hours_booking:number,
  beds:number,
  apply_vat:boolean,
  manufacturer:string,
  cruising_speed:number,
  max_speed:number,
  horse_Power:number,
  length:number,
  fuel_type:number,
  hull_type:number,
  engine_type:number,
  beam:number,
  water_slider:boolean,
  safety_equipment:boolean,
  soft_drinks_refreshments:boolean,
  swimming_equipment:boolean,
  ice_tea_water:boolean,
  DVD_player:boolean,
  satellite_system:boolean,
  red_carpet_on_arrival:boolean,
  spacious_saloon:boolean,
  BBQ_grill_equipment:boolean,
  fresh_towels:boolean,
  yacht_slippers:boolean,
  bathroom_amenities:boolean,
  LED_screen_tv:boolean,
  sunbathing_on_the_foredeck:boolean,
  fishing_equipment:boolean,
  model:number,
  year:string,
  images: [{
    id:number,
    image:string,
    thumbnail:string
  }],
  services: [
    {
      name:string,
      description:string,
      price:number,
      price_model:number,
      minimum_hours_booking:number,
      max_quantity:number,
      slug:string,
      image:string
    }
  ],
  seo: {
    title:string,
    description:string,
    keywords:[]
  },
  banner_image:string
}
