import Search from "./Search"

export default function Hero() {
  return (
    <section id="hero">
        <div className="bg-black inline-block">
            <h2><span className="text-white">SEARCH</span> FOR AN ARTIST</h2>
            <h2><span className="text-white">SELECT</span> YOUR SONG</h2>
            <h2><span className="text-white">VIEW</span> LYICS</h2>
            <Search />
        </div>
    </section>
  )
}