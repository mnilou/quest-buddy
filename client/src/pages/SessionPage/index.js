import {React, useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import API from '../../util/API';
import {useAuth} from '../../util/authContext';
import SessionPostsWall from '../../components/SessionPostsWall';
import MonsterAdd from '../../components/MonsterAdd';

function SessionPage () {
  const { sessionId } = useParams();
  const history = useHistory();
  const { user } = useAuth();

  const [session, setSession] = useState({});
  const [characters, setCharacters] = useState([{}]);
  const [posts, setPosts] = useState([]);
  const [showSessionPostsWallModal, setShowSessionPostsWallModal] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [campaignMonsters, setCampaignMonsters] = useState([]);
  const [monsterAddCounter, setMonsterAddCounter] = useState(0);

  useEffect(() => {
    API.getOneSession(sessionId)
      .then((results) => {
        console.log(results);
        setSession(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    API.getOneSession(sessionId)
      .then((results) => {
        console.log(results);
        setCampaignMonsters(results.data.monsters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sessionId,monsterAddCounter]);

  useEffect(() => {
    API.getMonsters().then(results => {
      setMonsters(results.data.results)
    })
  }, [])

  useEffect(() => {
    API.getOneSession(sessionId)
      .then((results) => {
        console.log(results);
        setPosts(results.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sessionId,showSessionPostsWallModal]);


  const showSessionPostsWallModalClick = (event) => {
    event.preventDefault();
    setShowSessionPostsWallModal(true);
  };

  const handleClose = () => {
    setShowSessionPostsWallModal(false);
  };

  const handleAddPostToSessionArray = (event) => {
    event.preventDefault();
    API.addPostToSessionArray(sessionId, user.username, newPostText).then(
      (res) => {
        setShowSessionPostsWallModal(false);
      }
    );
  };

  const handleInputChangeNewPostText = (event) => {
    const newText = event.target.value;
    setNewPostText(newText);
  };

  const handleAddMonster = (event) => {
    event.preventDefault()
    const monsterToAdd = event.target.previousElementSibling.selectedOptions[0].id
    API.getOneMonster(monsterToAdd).then(results => {
      API.addMonsterToSession(results.data, sessionId)
    }).then(() => {
      setMonsterAddCounter(monsterAddCounter + 1)
    })
  };

  return (
    <main className="container">
        <h3 className="mt-5 mb-4 text-center">{session.title}</h3>
        <h4 className="mt-3 mb-4 text-center"> {session.date}</h4>
        <div className="row">
            <div className="col">
                <div className="row mt-2">
                    <div className="col-md-6 overflow-auto border" style={{height: "15em"}}>
                        <p className="mt-2"></p>
                        <h5>DM's Log:</h5>
                        <p>{session.description}</p>
                    </div>
                    <div className="col-md-6 overflow-auto border" style={{height: "15em"}}>
                        <MonsterAdd
                        handleAddMonster={handleAddMonster}
                        monsters={monsters}
                        campaignMonsters={campaignMonsters}
                        />

                            {/* <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Dire Wolf</h5>
                                    <p className="card-text">CR: 3 / Alignment: Chaotic Neutral
                                    </p>
                                    <p className="card-text">Str:21/Dex:9/Con:15/Int:18/Wis:15/Char:18
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Dire Wolf</h5>
                                    <p className="card-text">CR: 3 / Alignment: Chaotic Neutral
                                    </p>
                                    <p className="card-text">Str:21/Dex:9/Con:15/Int:18/Wis:15/Char:18
                                    </p>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <SessionPostsWall 
                posts={posts}
                show={showSessionPostsWallModal}
                showModalFunction={showSessionPostsWallModalClick}
                handleClose={handleClose}
                handleAddPostToSessionArray={handleAddPostToSessionArray}
                handleInputChangeNewPostText={handleInputChangeNewPostText}
                />
            </div>
        </div>
    </main>
  );
}
export default SessionPage;