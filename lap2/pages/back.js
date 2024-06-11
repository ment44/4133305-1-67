export default function back(){
    return (
        <button onClick={getApi}>Call API</button>
    )
}

async function getapi (){
    const res = await fetch("http://127.0.0.1:3000/api/hello")
    const data = res.json()
    console.log(data);

    return data
}