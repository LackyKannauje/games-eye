import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GamesItems from './gamesItems';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

const HomePage= (props)=> {
  const {apiKey} = props;
  const query = useQuery();
  const gameCategory = query.get('category');
    
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const loadGames = async () => {
      try {
        const apibody = "https://free-to-play-games-database.p.rapidapi.com";
        const api = gameCategory==='pc'? `${apibody}/api/games?platform=pc`: 
         (gameCategory ? `${apibody}/api/games?category=${gameCategory}` : `${apibody}/api/games`);
        const response = await fetch(api, {
          method: 'GET',
          headers: {
            "x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        });
        const data = await response.json();     
         setGames(data);
         setVisibleGames(data.slice(0, itemsPerPage));
            setHasMore(data.length > itemsPerPage);
      } catch (error) {
        console.error('Error fetching games:', error);
        setGames([]);
      }
    };

    loadGames();
  }, [gameCategory,apiKey]);

  const loadMoreGames = () => {
    const currentLength = visibleGames.length;
    const newGames = games.slice(currentLength, currentLength + itemsPerPage);
    setVisibleGames([...visibleGames, ...newGames]);
    setHasMore(games.length > visibleGames.length + itemsPerPage);
  };

  return (
    <div className='container text-center'>
      <h3 className='mt-2 mb-4'>Popular Games</h3>
      {games.length === 0 ? <p>No games found</p>:<InfiniteScroll
        dataLength={visibleGames.length}
        next={loadMoreGames}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>----------------------------------------------</p>}
      >
        <div className='row mx-2'>
          
        {visibleGames.map((game) => (
            <div className='col-md-3 my-2' key={game.id}>
              <GamesItems
                title={game.title}
                desc={game.short_description}
                image={game.thumbnail}
                gameUrl={game.game_url}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>}
    </div>
  );
}

export default HomePage;