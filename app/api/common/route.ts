/*
 * @Author: shanlonglong danlonglong@weimiao.cn
 * @Date: 2024-12-25 10:41:49
 * @LastEditors: shanlonglong danlonglong@weimiao.cn
 * @LastEditTime: 2024-12-25 12:17:57
 * @FilePath: \shane_nft\app\api\common\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextRequest, NextResponse } from "next/server";

import { SuccessMsg , SuccessCode } from "@/constant/common";
import { formatResponse } from "@/utils/backEnd/common";


export const GET = async (req: NextRequest) => {
  console.log(req);
  return NextResponse.json(formatResponse({}, SuccessCode, SuccessMsg));
};
