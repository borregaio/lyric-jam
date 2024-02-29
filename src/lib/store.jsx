import { atom, useAtom } from 'jotai'

const store = atom({
    searchResults: null,
    selectedSong: {
        title: 'Texas Hold \'em',
        artist: 'Beyonce'
    }
})



function useStore() {
    const [_store, setStore] = useAtom(store)
    const updateStore = (key, newVal) => {
        setStore(current => {
            current[key] = newVal
            return {...current}
        })
    }
    return [_store, updateStore]
}

export default useStore