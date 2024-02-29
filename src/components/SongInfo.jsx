import useStore from '../lib/store.jsx'

export default function SongInfo() {

    const [store, updateStore] = useStore()

    // testing the store-updating function
    // setTimeout(() => {
    //     updateStore('selectedSong', {
    //         artist: 'Prince',
    //         title: 'Kiss'
    //     })
    // }, 1500);

  return (
    <>    
        {store.selectedSong && (
            <>
            <h2>{store.selectedSong.artist}</h2>
            <h2>{store.selectedSong.title}</h2>
            </>
        )}
    </>
  )
}