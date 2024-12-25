import { SuccessMsg } from "@/constant/common";
import { SuccessCode } from "@/constant/common";
import { formatResponse } from "@/utils/backEnd/common";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    const id = req.nextUrl.searchParams.get("id");
        console.log(id);
    return NextResponse.json(formatResponse({id: id}, SuccessCode, SuccessMsg));
}
