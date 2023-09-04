import AddOrRemoveButton from "./AddOrRemoveButton";

export default function Track({track, tracksInCustomPlaylist, setState, isSearchResultTrack}) {
  const {id, name: songName, artist: artistName, album: albumName} = track;

  const foundTrackInCustomPlaylist = tracksInCustomPlaylist.find(trackInCustomPlaylist => trackInCustomPlaylist.id === id);

  return (
    <li className="flex flex-row w-full items-center justify-between">
      <div className="flex flex-col py-2">
        <span>{songName}</span>
        <span className="text-xs">{artistName} | {albumName}</span>
      </div>

      <AddOrRemoveButton
        isSearchResultTrack={isSearchResultTrack}
        foundTrackInCustomPlaylist={foundTrackInCustomPlaylist}
        setState={setState}
        track={track}
      />
    </li>
  );
}