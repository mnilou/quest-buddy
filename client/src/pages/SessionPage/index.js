import {React, useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import API from '../../util/API';
import CharacterTile from '../../components/CharacterTile';
import {useAuth} from '../../util/authContext';

function SessionPage () {
  const { sessionId } = useParams();
  const history = useHistory();
  const { user } = useAuth();

  const [session, setSession] = useState({});
  const [characters, setCharacters] = useState([{}]);

  useEffect(() => {
    // example API call
    API.getOneSession(sessionId)
      .then((results) => {
        console.log(results);
        setSession(results.data);
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

                        <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">No Monsters Added Yet</h5>
                                        <p className="card-text text-center">Find ye opponents to face in mortal combat!</p>
                                    </div>
                        </div>
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
                <div className="row">
                    <div className="col-11 overflow-auto" style={{height: "15em"}}>

                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">No Posts Yet</h5>
                            <p className="card-text text-center">Add a posts</p>
                        </div>
                    </div>
                        {/* <p>ccruzcosa@gmail said: It was awesome!</p>
                        <p>ccruzcosa@gmail said: We found a door that we couldn't open. It seemed to need four keys, but
                            we didn't find any of them yet.
                            We need to keep looking in the rest of the cemetary.</p>
                        <p>ariel@gmail said: We found a plaque that said, "Now my charms are all o'erthrown,
                            And what strength I have's mine own,
                            Which is most faint: now, 'tis true,
                            I must be here confined by you,
                            Or sent to Naples. Let me not,
                            Since I have my dukedom got
                            And pardon'd the deceiver, dwell
                            In this bare island by your spell;
                            But release me from my bands
                            With the help of your good hands:
                            Gentle breath of yours my sails
                            Must fill, or else my project fails,
                            Which was to please. Now I want
                            Spirits to enforce, art to enchant,
                            And my ending is despair,
                            Unless I be relieved by prayer,
                            Which pierces so that it assaults
                            Mercy itself and frees all faults.
                            As you from crimes would pardon'd be,
                            Let your indulgence set me free.
                        </p>
                        <p>ccruzcosa said: Mark but the badges of these men, my lords,
                            Then say if they be true. This mis-shapen knave,
                            His mother was a witch, and one so strong
                            That could control the moon, make flows and ebbs,
                            And deal in her command without her power.
                            These three have robb'd me; and this demi-devil—
                            For he's a bastard one—had plotted with them
                            To take my life. Two of these fellows you
                            Must know and own; this thing of darkness I
                            Acknowledge mine.
                        </p> */}
                    </div>
                    <div className="col-1 border">
                        <button className="btn btn-success" style={{height: "15em", display: "block"}}>
                            Add Post</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
export default SessionPage;