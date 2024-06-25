import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
    const allUser = await prisma.user.findMany();

    return Response.json(allUser);
}

export async function POST(req){

    try{
        const {email,name} = await req.json()
        const createuser = await prisma.user.create({
    data:{
        email,
        name,
    },
  });
  return Response.json(createuser,{ status: 200 });
        
    }catch (err){
        return Response.json(err, {status: 500});
    
    }
}
    