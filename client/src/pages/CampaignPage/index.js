import {React, useHistory, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useAuth} from '../../util/authContext';
import Calendar from "../../Calendar;"

function CampaignPage() {
  const {id} = useParams();
  const history = useHistory();
  const {user} = useAuth();
  const characterCreatorClick = (event) => {
    event.preventDefault();
    history.push('/charactercreator');
  };
  const teamCreatorClick = (event) => {
    event.preventDefault();
    history.push('/teamcreator');
  };
  const teamPageClick = (event) => {
    event.preventDefault();
    history.push('/team');
  };
  const characterPageClick = (event) => {
    event.preventDefault();
    history.push('/character');
  };
  return (
    <main className="container">
      <h3 className="mt-3 mb-4 text-center">Death, Frost, Doom </h3>
      <div className="row">
        <div className="col">
          <Calendar />
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
          <p>
            Up on the mountain is a house by a cemetary, haunted by the memories
            of atrocities past. The cult on the mountain is long gone, yet the
            music of weidling death carries on the wind.
          </p>
          <p>The mountain is cold. So very cold.</p>
          <p>
            And the greedy and the foolish will march bravely up the mountain
            for gold and glory.
          </p>
        </div>
        <div className="col-md-6 overflow-auto border" style={{height: '15em'}}>
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Grumble the Merciless</h5>
                <p className="card-text">Level: 8 / Barbarian / Dark Elf</p>
                <button onClick={characterPageClick} className="btn btn-danger">
                  Go to Character
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bumble the Less Merciless</h5>
                <p className="card-text">Level: 2 / Druid / Human</p>
                <button onClick={characterPageClick} className="btn btn-danger">
                  Go to Character
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">R'end Stormrider</h5>
                <p className="card-text">Level: 12 / Necromancer / High Elf</p>
                <button onClick={characterPageClick} className="btn btn-danger">
                  Go to Character
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </main>
  );
}
export default CampaignPage;
