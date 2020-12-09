import {React, useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import API from '../../util/API';
// import CharacterTile from '../../components/CharacterTile';
import CharacterAdd from '../../components/CharacterAdd';
import {useAuth} from '../../util/authContext';
import Calendar from '../../components/Calendar';

function CampaignPage() {
  const {campaignId} = useParams();
  const history = useHistory();
  const {user} = useAuth();

  const [campaign, setCampaign] = useState({});
  const [campaignCharacters, setCampaignCharacters] = useState([]);
  const [userCharacters, setUserCharacters] = useState([]);

  //these variables are for using the Add Character component and its modal
  const [showCharacterAddModal, setShowCharacterAddModall] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState('');

  //this gets the inital campaign data
  useEffect(() => {
    API.getOneCampaign(campaignId)
      .then((results) => {
        setCampaign(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //this gets the character tile information as an array
  useEffect(() => {
    let characterIdArray;

    API.getOneCampaign(campaignId)
      .then((results) => {
        characterIdArray = results.data.characters;
      })
      .then(() => {
        let arrayCounter = 0;
        let newArray = [];
        characterIdArray.forEach((characterId) => {
          API.getOneCharacter(characterId).then((results) => {
            newArray.push(results.data);
            arrayCounter++;
            if (arrayCounter === characterIdArray.length) {
              setCampaignCharacters(newArray);
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [campaignId, showCharacterAddModal]);

  useEffect(() => {
    API.getCharacters(user)
      .then((results) => {
        setUserCharacters(results.data.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const characterPageClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    const id = event.target.id;
    history.push('/character/' + id);
  };

  const sessionClick = (event, sessionId) => {
    history.push('/session/' + sessionId);
  };

  const showCharacterAddModalClick = (event) => {
    event.preventDefault();
    setShowCharacterAddModall(true);
  };

  const handleClose = () => {
    setShowCharacterAddModall(false);
  };

  const handleCharacterAddSubmit = (event) => {
    event.preventDefault();
    API.addCharacterToCampaignArray(campaignId, selectedCharacterId).then(
      (res) => {
        setShowCharacterAddModall(false);
      }
    );
  };

  const handleInputChangeCharacterAdd = (event) => {
    const theSelectedCharacterID = event.target.value;
    setSelectedCharacterId(theSelectedCharacterID);
  };

  return (
    <main className="container">
      <h3 className="mt-5 mb-3 text-center">{campaign.name}</h3>
      <h5 className="mt-1 mb-4 text-center">
        {'Game System: ' + campaign.system + ' Campaign'}
      </h5>
      <span
        className="block"
        style={{
          display: 'block',
          margin: 'auto',
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '1rem',
          borderBlock: '#2C3E50',
          backgroundColor: '#2C3E50',
          color: 'white',
          borderRadius: '0.5rem',
          textAlign: 'center',
        }}
      >
        Click on the calendar to create an event
      </span>
      <div className="col" style={{contentHeight: '50'}}>
        <Calendar campaignId={campaignId} sessionClick={sessionClick} />
      </div>
      <div className="row mt-2 mb-6" style={{height: '15em'}}>
        <div className="col-md-6 overflow-auto border">
          <p className="mt-2"></p>
          {campaign.description}
        </div>
        <div className="col-md-6 overflow-auto border" style={{marginBottom: '10em'}}>
          <CharacterAdd
            campaignCharacters={campaignCharacters}
            userCharacters={userCharacters}
            show={showCharacterAddModal}
            showModalFunction={showCharacterAddModalClick}
            handleClose={handleClose}
            handleCharacterAddSubmit={handleCharacterAddSubmit}
            handleInputChangeCharacterAdd={handleInputChangeCharacterAdd}
            onClick={characterPageClick}
          />
        </div>
      </div>
    </main>
  );
}
export default CampaignPage;
