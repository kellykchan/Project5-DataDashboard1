import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [minEpisodes, setMinEpisodes] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters = [];
      let nextUrl = 'https://rickandmortyapi.com/api/character';

      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        nextUrl = data.info.next;
      }

      setCharacters(allCharacters);
      setMinEpisodes(1);
    };

    fetchCharacters();
  }, []);

  // Max episode count
  const maxEpisodeCount = characters.reduce(
    (max, char) => Math.max(max, char.episode.length),
    1
  );

  // Species list
  const speciesOptions = Array.from(new Set(characters.map(c => c.species))).sort();

  const filteredCharacters = characters.filter(character => {
    const matchesName = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? character.status === statusFilter : true;
    const matchesSpecies = speciesFilter ? character.species === speciesFilter : true;
    const episodeCount = character.episode.length;
    const matchesMinEpisodes = episodeCount >= minEpisodes;

    return matchesName && matchesStatus && matchesSpecies && matchesMinEpisodes;
  });

  const totalCharacters = characters.length;
  const uniqueSpeciesCount = speciesOptions.length;
  const aliveCount = characters.filter(c => c.status === 'Alive').length;
  const deadCount = characters.filter(c => c.status === 'Dead').length;
  const unknownCount = characters.filter(c => c.status === 'unknown').length;

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>

      <div className="stats">
        <p>Total Characters: {totalCharacters}</p>
        <p>Species Count: {uniqueSpeciesCount}</p>
        <p>Alive: {aliveCount}</p>
        <p>Dead: {deadCount}</p>
        <p>Unknown: {unknownCount}</p>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select value={speciesFilter} onChange={e => setSpeciesFilter(e.target.value)}>
          <option value="">All Species</option>
          {speciesOptions.map(species => (
            <option key={species} value={species}>{species}</option>
          ))}
        </select>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          Min Episodes: {minEpisodes}
          <input
            type="range"
            min="1"
            max={maxEpisodeCount}
            value={minEpisodes}
            onChange={e => setMinEpisodes(Number(e.target.value))}
            style={{ width: '200px' }}
          />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
            <th>Episode Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredCharacters.map(character => (
            <tr key={character.id}>
              <td>
                <img
                  src={character.image}
                  alt={character.name}
                  className="character-img"
                />
              </td>
              <td>{character.name}</td>
              <td>{character.species}</td>
              <td>{character.status}</td>
              <td>{character.episode.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
