export function GET(request,{ params}) {
    return Response.json({
        name: "junlajag",
        major: "IT",
        lv: "3",
        id: params.id
    });
}