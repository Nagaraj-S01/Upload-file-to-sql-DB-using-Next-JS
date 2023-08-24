import {excuteQuery, getQuery} from '../../lib/db'
import { NextResponse, NextRequest } from "next/server";
// eslint-disable-next-line import/no-anonymous-default-export
export async function POST (request: NextRequest) {
  const req = await request.json()
  const result = await excuteQuery({file: req.file});
  return NextResponse.json({result}, { status: 200 })
  
  
  };

  export async function GET (request: NextRequest) {
    const result = await getQuery();
    return NextResponse.json({result}, { status: 200 })
    };