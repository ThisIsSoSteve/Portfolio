export default function Section(props) {


    return (
        <section className="min-h-screen" >
            <h1 className="text-3xl font-bold underline">
                {props.text}
            </h1>
        </section>
    )
}