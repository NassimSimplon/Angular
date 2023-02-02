//@VIDEO INTERFACE

export interface VIDEO{
    id:Number,
    title:String,
    thumbnail:String,
    visibility:String,
    CreatedAt:Date
}

export interface COMMENT{
    id:Number,
    body:String,
    vdID:String,
    CreatedAt:Date
}
