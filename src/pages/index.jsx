import { useState } from 'react';
import Track from '../components/home/Track';
import dummyData from '../dummyData';

export default function HomePage() {
  const [state, setState] = useState({
    searchString: '',
    searchResults: dummyData,
    customPlaylistName: '',
    tracksInCustomPlaylist: []
  });

  async function handleSearchSubmit(e) {
    e.preventDefault();
    // TODO: Make an API call to Spotify with the searchString

    // await axios.get('') // API call to spotify
    // setState(prevState => ({...prevState, searchResults}));
  }

  async function saveToSpotify(e) {
    e.preventDefault();

    // TODO: make an API call to Spotify with the tracks in custom playlist (maybe just the IDs ?)
    // TODO: Refernce Spotify's API of how to create a playlist (with name & songs)

    setState(prevState => ({...prevState, customPlaylistName: '', tracksInCustomPlaylist: []}));
  }

  function handleSearchChange(e) {
    setState(prevState => ({...prevState, searchString: e.target.value}));
  }

  function handleCustomPlaylistNameChange(e) {
    setState(prevState => ({...prevState, customPlaylistName: e.target.value}));
  }
 
  return (
    <>
      <header className="w-full mb-5 pt-5">
        <form onSubmit={handleSearchSubmit} class="flex flex-col gap-y-2 max-w-[300px] mx-auto">
          <input
            type="text"
            value={state.searchString}
            onChange={handleSearchChange}
            placeholder="e.g. Drake, Bohemian Rhapsody, Thriller"
            aria-labelledby="searchSpotify"
          />
          <button id="searchSpotify" type="submit">Search Spotify</button>
        </form>
      </header>

      <main>
        <section className="flex flex-row justify-center gap-x-5">
          <div className="w-80">
            <h2 className="text-lg font-bold">Results</h2>
            <ol>
              {state.searchResults.map(track => (
                <Track
                  key={track.id}
                  track={track}
                  tracksInCustomPlaylist={state.tracksInCustomPlaylist}
                  setState={setState}
                  isSearchResultTrack
                />
              ))}
            </ol>
          </div>

          <div className="w-80">
            <form onSubmit={saveToSpotify}>
              <input
                type="text"
                value={state.customPlaylistName}
                onChange={handleCustomPlaylistNameChange}
                placeholder="Playlist name..."
              />
              <ol>
                {state.tracksInCustomPlaylist.map(track => (
                  <Track
                    key={track.id}
                    track={track}
                    tracksInCustomPlaylist={state.tracksInCustomPlaylist}
                    setState={setState}
                  />
                ))}
              </ol>

              <button type="submit">Save to Spotify</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
