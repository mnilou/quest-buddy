import {React, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Calendar from '../../components/Calendar';
import API from '../../util/API';
import {useAuth} from '../../util/authContext';

function CampaignCreator() {
  const {user, logout} = useAuth();
  const [data, setData] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    manager: '',
    members: [],
  });
  const history = useHistory();

  const handleInputChange = (event) => {
    setFormState({
      name: event.target.value,
      manager: user.username,
      members: [user.username],
      campaigns: [],
    });
    console.log(formState);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    API.createTeam(formState);
    history.push('/team');
  };

  return (
    <main class="container">
      <h3 class="mt-3 mb-4 text-center">Create a New Campaign</h3>
      <Calendar />
      <div class="row">
        <div class="col" onSubmit={handleOnSubmit}>
          <form>
            <div class="form-group">
              <label for="campaignName">Campaign Name</label>
              <input type="text" class="form-control" id="campaignName" />
            </div>
            <div class="form-group">
              <label for="gameSystem">Game System</label>
              <select class="form-control" id="gameSystem">
                <option>D&D, 5E</option>
              </select>
            </div>
            <div className="form-group">
              <label for="description">Setting Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Create!
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CampaignCreator;
