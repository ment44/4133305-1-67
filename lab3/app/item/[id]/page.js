import TestBtn from "./testBtn"
import Test from "./testBtn"
import Plus from "@/lib/Plus"
export default function Item ({params}) {

    const added = Plus(2,7)
    return (
        <div>
            <p>Item : {params.id}</p>
            <p>{added}</p>
            <TestBtn/>
        </div>
    )
}