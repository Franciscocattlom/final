
import { useAuth } from "../Context/authContext";
import GridLayout from "./GridLayout";


export function Home() {

    const { user } = useAuth()
    console.log(user);

    return <div>  
        <GridLayout></GridLayout>
    </div>
}