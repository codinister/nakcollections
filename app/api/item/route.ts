import client from '@/data/sanity/client';
import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const res = await client.fetch(
      groq`
      *[_type = 'item' ]{
            "id": _id,
            title,
            price,
            "image": image.asset->url,
            excerpt,
            "desc": body[]{
              ..., 
              asset->{
                ...,
                "_key": _id
              }
            },
            "cat": category[]->title,
            "gallery": gallery[]{
            "image": asset->url
            }, 
            qty ,
            sold 
      }
      `
    );

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}