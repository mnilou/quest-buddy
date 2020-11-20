import {React, useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import API from '../../util/API';
import CharacterTile from '../../components/CharacterTile';
import {useAuth} from '../../util/authContext';
import Calendar from '../../components/Calendar';

function CampaignPage() {
  const {campaignId} = useParams();
  console.log({campaignId});
  const history = useHistory();
  const {user} = useAuth();

  const [campaign, setCampaign] = useState({});
  const [characters, setcharacters] = useState([{}]);

  useEffect(() => {
    // example API call
    API.getOneCampaign(campaignId)
      .then((results) => {
        console.log(results);
        setCampaign(results.data);
        setcharacters(results.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const characterPageClick = (event) => {
    event.preventDefault();
    history.push('/character');
  };

  const sessionClick = (event, sessionId) => {
    history.push('/session/' + sessionId);
  };

  return (
    <main className="container">
      <h3 className="mt-3 mb-4 text-center">{campaign.name}</h3>
      <div className="row">
        <div className="col">
          <Calendar campaignId={campaignId} sessionClick={sessionClick} />
        </div>
        <div
          className="col-lg-3"
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span
            className="d-block p-2 bg-primary text-white rounded"
            style={{padding: '3rem', borderBlock: 'primary'}}
          >
            Click on the date to create a new event
          </span>
          <br />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6 overflow-auto border" style={{height: '15em'}}>
          <p className="mt-2"></p>
          {campaign.description}
        </div>
        <div className="col-md-6 overflow-auto border" style={{height: '15em'}}>
          {characters > 0
            ? characters.map((character) => (
                <CharacterTile
                  onClick={characterPageClick}
                  id={character._id}
                  key={character._id}
                  name={character.name}
                  class={character.class}
                  race={character.race}
                  level={character.level}
                />
              ))
            : ''}
        </div>
      </div>
      {/* </div>
      </div> */}
    </main>
  );
}
export default CampaignPage;
