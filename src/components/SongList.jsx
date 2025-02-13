import SongItem from "./SongItem"

const SongList = () => {
  return (
    <div className="song-list">
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />

      <div className="song-list__see-more">Ver mais</div>
    </div>
  )
}

export default SongList