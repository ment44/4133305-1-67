import {prismaclient } from "prisma-client";
import { hashSync } from "bcrypt";

const prisma = new prismaclient();

export async function POST(req){

    try{
    const {email,name,password} = await req.json();
    const hashedpassword = await hash(password, 10);
    const hashedapassword = hashSync(password,10);
    const newuser = await prisma.user.create({

    data: {
        email,
        name,
        password: hashedpassword,
    },
  }); 
  return Response.json({
    msg: "user created !!",
    data: newuser,
  });
}catch(err) {
    return Response.json(err, { status: 500 });
    }
}