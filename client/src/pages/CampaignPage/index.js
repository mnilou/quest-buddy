import { React, useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../../util/API';
// import CharacterTile from '../../components/CharacterTile';
import CharacterAdd from '../../components/CharacterAdd';
import { useAuth } from '../../util/authContext';
import Calendar from '../../components/Calendar';

function CampaignPage() {
  const { campaignId } = useParams();
  const history = useHistory();
  const { user } = useAuth();

  const [monsters, setMonsters] = useState([]);

  const [campaign, setCampaign] = useState({});
  const [campaignCharacters, setCampaignCharacters] = useState([]);
  const [userCharacters, setUserCharacters] = useState([]);

  const [campaignMonsters, setCampaignMonsters] = useState([]);

  //these variables are for using the Add Character component and its modal
  const [showCharacterAddModal, setShowCharacterAddModall] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState('');

  //this gets the inital campaign data
  useEffect(() => {
    API.getOneCampaign(campaignId)
      .then((results) => {
        setCampaign(results.data)

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //this gets the character tile information as an array
  useEffect(() => {
    let characterIdArray;
    let monsterArray;

    API.getOneCampaign(campaignId)
      .then((results) => {
        characterIdArray = results.data.characters;
        monsterArray = results.data.monsters;
        setCampaignMonsters(monsterArray)
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

  useEffect(() => {
    API.getMonsters().then(results => {
      setMonsters(results.data.results)
    })
  }, [])

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

  // const handleSelectChange = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.selectedOptions[0].id)
  // }

  const handleAddMonster = (event) => {
    event.preventDefault()
    const monsterToAdd = event.target.previousElementSibling.selectedOptions[0].id
    API.getOneMonster(monsterToAdd).then(results => {
      API.addMonsterToCampaign(results.data, campaignId)
    }).then(() => {
      window.location.reload(false)
    })
    // console.log(event.target.previousElementSibling.selectedOptions[0].id);
  }

  return (
    <main className="container">
      <h3 className="mt-5 mb-3 text-center">{campaign.name}</h3>
      <h5 className="mt-1 mb-4 text-center">{"Game System: " + campaign.system + " Campaign"}</h5>
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
      <div className="col" style={{ contentHeight: '50' }}>
        <Calendar campaignId={campaignId} sessionClick={sessionClick} />
      </div>
      <div className="row mt-2 mb-6" style={{ height: '15em' }}>
        <div className="col-md-6 overflow-auto border" >
          <p className="mt-2"></p>
          {campaign.description}
        </div>
        <div className="col-md-6 overflow-auto border" >
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

        {/* The styling is pretty much not here, so go crazy */}
        <div className="col-md-6">
          <div className="form-group">
            <select className="form-control">
              {monsters.map(item => {
                // console.log(item);
                return <option id={item.index} key={item.index}>{item.name}</option>

              })}
              {/* <option>Test</option> */}
            </select>
            <button className="mt-3 btn btn-danger" onClick={handleAddMonster}>Add Monster</button>
          </div>
          <div className="overflow-auto">
            {campaignMonsters.map(item => {
              let enemyType = item.type.split("");
              enemyType[0] = enemyType[0].toUpperCase();
              enemyType = enemyType.join('');
              // console.log(enemyType)
              // item.type[0].toUpperCase()
              return <div className="card">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">HP: {item.hit_points}</p>
                <p className="card-text">Damage: {item.hit_dice}</p>
                <p className="card-text">Size: {item.size}</p>
                <p className="card-text">Type: {enemyType}</p>
              </div>
            })}

          </div>

        </div>
      </div>

    </main>
  );
}
export default CampaignPage;
