import {Form} from "../../components/Form";
import {Todos} from "../../components/Todos";

const Main = () =>{
    return (
        <>
        <main className="flex justify-center m-10">
            <Form />
        </main>
        <section className="w-[50%] mx-auto">
            <Todos />
        </section>
        </>
    )
}

export default Main