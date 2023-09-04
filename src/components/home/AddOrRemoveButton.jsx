export default function AddOrRemoveButton({foundTrackInCustomPlaylist, setState, track, isSearchResultTrack}) {
  function addTrackToCustomPlaylist() {
    if (!foundTrackInCustomPlaylist) {
      setState(prevState => ({
        ...prevState,
        tracksInCustomPlaylist: [...prevState.tracksInCustomPlaylist, track]
      }))
    }
  }

  function removeTrackFromCustomPlaylist() {
    setState(prevState => ({
      ...prevState,
      tracksInCustomPlaylist: prevState.tracksInCustomPlaylist.filter(trackInCustomPlaylist => (
        trackInCustomPlaylist.id !== track.id
      ))
    }));
  }


  if (isSearchResultTrack && foundTrackInCustomPlaylist) {
    return <></>;
  } else if (foundTrackInCustomPlaylist) {
    return (
      <button
        type="button"
        onClick={removeTrackFromCustomPlaylist}
        aria-label="Remove from custom playlist"
        title="Remove from custom playlist"
      > - </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={addTrackToCustomPlaylist}
        aria-label="Add to custom playlist"
        title="Add to custom playlist"
      > + </button>
    );
  }
}