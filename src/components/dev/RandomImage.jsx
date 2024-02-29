export default function RandomImage({
    w = 500,
    h = 500
}) {
  return (
    <img src={`https://picsum.photos/seed/${Math.random()}/${w}/${h}`} alt="Random image. Development only." />
  )
}