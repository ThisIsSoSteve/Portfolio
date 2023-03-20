export default function Section(props) {


    return (
        <section className="min-h-screen w-100 text-white" >
            <div class="flex flex-col w-full  justify-center items-start p-8">
                <h1 class="text-3xl md:text-5xl py-2 text-amber-400 tracking-loose">
                    {props.header}
                </h1>
                <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                    {props.subheader}
                </h2>
                <p class="text-sm md:text-base text-gray-50 mb-4">
                    {props.description}
                </p>
                {/* <a href="#"
					class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Explore Now</a> */}
                <div>
                    {props.children}
                </div>
            </div>
        </section>
    )
}