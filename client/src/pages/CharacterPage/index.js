import {useParams, useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import CharacterGear from '../../components/CharacterGear';
import CharacterTools from '../../components/CharacterTools';
import CharacterWeapons from '../../components/CharacterWeapons';
import CharacterArmor from '../../components/CharacterArmor';
import CharacterSpells from '../../components/CharacterSpells';
import {useAuth} from '../../util/authContext';
import API from '../../util/API';
import './style.css';
import Charactertools from '../../components/CharacterTools';
//import e from "express";

function CharacterPage() {
  const {id} = useParams();
  const history = useHistory();
  const {user} = useAuth();

  const [characterData, setCharacterData] = useState({});
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([]);
  const [tools, setTools] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [armor, setArmor] = useState([]);
  const [spells, setSpells] = useState([]);
  const [characterGear, setCharacterGear] = useState([]);
  const [characterTools, setCharacterTools] = useState([]);
  const [characterWeapons, setCharacterWeapons] = useState([]);
  const [characterArmor, setCharacterArmor] = useState([]);
  const [characterSpells, setCharacterSpells] = useState([]);
  //const [characterWeapons, setcharacterWeapons] = useState([]);
  //const [characterArmor, setcharacterArmor] = useState([]);

  //let equipmentList = [];
  let equipmentToAdd;
  let spellToAdd;

  const up = (event) => {
    const currentVar = parseInt(
      event.target.previousElementSibling.textContent
    );
    const input = event.target.previousElementSibling.id;
    const upVar = currentVar + 1;
    event.target.previousElementSibling.textContent = upVar;
    saveCharacter(input, 1);
  };

  const down = (event) => {
    const currentVar = parseInt(event.target.nextElementSibling.textContent);
    const input = event.target.nextElementSibling.id;
    const downVar = currentVar - 1;
    event.target.nextElementSibling.textContent = downVar;
    saveCharacter(input, -1);
  };

  const addItem = (event) => {
    let item = event.target.previousElementSibling.value;
    item = item
      .replace(/[.,#!$%^&*;:{}=\-_`'~()]/g, '')
      .replace(/ /g, '-')
      .toLowerCase();
    API.getOneEquipment(item)
      .then((results) => {
        //console.log(results.data)
        equipmentToAdd = results.data;
      })
      .then(() => {
        API.addEquipment(characterData._id, equipmentToAdd);
        window.location.reload(false);
      });
  };

  const addSpell = (event) => {
    let spell = event.target.previousElementSibling.value;
    spell = spell
      .replace(/[.,\#!$%\^&\*;:{}=\-_`'~()]/g, '')
      .replace(/[\/ ]/g, '-')
      .toLowerCase();
    API.getOneSpell(spell)
      .then((results) => {
        spellToAdd = results.data;
      })
      .then(() => {
        API.addSpell(characterData._id, spellToAdd);
        window.location.reload(false);
      });
  };

  async function saveCharacter(stat, num) {
    switch (stat) {
      case 'level':
        setCharacterData({...characterData, level: characterData.level + num});
        break;
      case 'currentHP':
        setCharacterData({
          ...characterData,
          currentHP: characterData.currentHP + num,
        });
        break;
      case 'maxHP':
        setCharacterData({...characterData, maxHP: characterData.maxHP + num});
        break;
      case 'strength':
        setCharacterData({
          ...characterData,
          strength: characterData.strength + num,
        });
        break;
      case 'dexterity':
        setCharacterData({
          ...characterData,
          dexterity: characterData.dexterity + num,
        });
        break;
      case 'constitution':
        setCharacterData({
          ...characterData,
          constitution: characterData.constitution + num,
        });
        break;
      case 'intelligence':
        setCharacterData({
          ...characterData,
          intelligence: characterData.intelligence + num,
        });
        break;
      case 'wisdom':
        setCharacterData({
          ...characterData,
          wisdom: characterData.wisdom + num,
        });
        break;
      case 'charisma':
        setCharacterData({
          ...characterData,
          charisma: characterData.charisma + num,
        });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    API.getOneCharacter(id)
      .then((results) => {
        setCharacterData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    API.getOneCharacter(id)
      .then((results) => {
        //console.log(results.data.gear)
        setCharacterGear(results.data.gear);
        setCharacterTools(results.data.tools);
        setCharacterWeapons(results.data.weapons);
        setCharacterArmor(results.data.armor);
      })
      .then(() => {
        // console.log(characterGear);
        // console.log(characterTools);
        // console.log(characterWeapons);
        // console.log(characterArmor);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    API.getOneCharacter(id)
      .then((results) => {
        setCharacterSpells(results.data.spells);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Item types you want to separate are "Weapon" and "Armor"

  useEffect(() => {
    API.getEquipment().then((equipment) => {
      //console.log("target length "  + equipment.data.results.length)
      //setItems(equipment.data.results)
    });
  }, []);

  useEffect(() => {
    API.getAdventureGear().then((equipment) => {
      // console.log(equipment.data.equipment.length)
      setItems(equipment.data.equipment);
    });
  }, []);

  useEffect(() => {
    API.getTools().then((tools) => {
      //console.log(tools.data.equipment.length)
      setTools(tools.data.equipment);
    });
  }, []);

  useEffect(() => {
    API.getWeapons().then((weapons) => {
      //console.log(weapons.data.equipment.length);
      setWeapons(weapons.data.equipment);
    });
  }, []);

  useEffect(() => {
    API.getArmor().then((armor) => {
      // console.log(armor.data.equipment.length);
      setArmor(armor.data.equipment);
    });
  }, []);

  useEffect(() => {
    API.getSpells()
      .then((spellList) => {
        setSpells(spellList.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(characterSpells)
  useEffect(() => {
    if (counter !== 0) {
      API.updateCharacter(characterData);
    } else {
      setCounter(counter + 1);
    }
  }, [characterData]);

  const deleteCharacter = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this character?");
    if (confirmDelete === true){
    API.deleteCharacter(user.id, id).then(() => {
      history.push('/user');
    });
    }

  };

  return (
    <main className="container">
      <h3 className="mt-5 mb-4 text-center">{characterData.name}</h3>
      <h4 className="mt-3 mb-4 text-center">{characterData.system}</h4>
      <div className="row">
        <div className="col">
          <div className="row mt-2">
            <div className="col-md-6">
              <h5>Race: {characterData.race}</h5>
              <h5>Class: {characterData.class}</h5>
              <div className="overflow-auto border" style={{height: '45em'}}>
                <p className="mt-2"></p>

                <h5>
                  Level:
                  <div className="def-number-input number-input safari_only">
                    <button onClick={down} className="minus"></button>
                    <p id="level" className="quantity">
                      {characterData.level}
                    </p>
                    <button onClick={up} className="plus"></button>
                  </div>
                </h5>
                <br />
                <div className="row">
                  <div className="col">
                    <h6>
                      Current HP:
                      <div className="def-number-input number-input safari_only">
                        <button onClick={down} className="minus"></button>
                        <p id="currentHP" className="quantity">
                          {characterData.currentHP}
                        </p>
                        <button onClick={up} className="plus"></button>
                      </div>
                    </h6>
                    <h6>
                      Max HP:
                      <div className="def-number-input number-input safari_only">
                        <button onClick={down} className="minus"></button>
                        <p id="maxHP" className="quantity">
                          {characterData.maxHP}
                        </p>
                        <button onClick={up} className="plus"></button>
                      </div>
                    </h6>
                  </div>
                  <div className="col"></div>
                </div>
                <br />
                <h5>Stats</h5>
                <h6>
                  Strength:
                  <div className="def-number-input number-input safari_only">
                    <button onClick={down} className="minus"></button>
                    <p id="strength" className="quantity">
                      {characterData.strength}
                    </p>
                    <button onClick={up} className="plus"></button>
                  </div>
                </h6>
                <h6>
                  Dexterity:
                  <div className="def-number-input number-input safari_only">
                    <button onClick={down} className="minus"></button>
                    <p id="dexterity" className="quantity">
                      {characterData.dexterity}
                    </p>
                    <button onClick={up} className="plus"></button>
                  </div>
                </h6>
                <h6>
                  Constitution:
                  <div className="def-number-input number-input safari_only">
                    <button onClick={down} className="minus"></button>
                    <p id="constitution" className="quantity">
                      {characterData.constitution}
                    </p>
                    <button onClick={up} className="plus"></button>
                  </div>
                </h6>
                <h6>
                  Intelligence:
                  <div className="def-number-input number-input safari_only">
                    <button onClick={down} className="minus"></button>
                    <p id="intelligence" className="quantity">
                      {characterData.intelligence}
                    </p>
                    <button onClick={up} className="plus"></button>
                  </div>
                </h6>
                <h6>
                  Widsom:
                  <div className="def-number-input number-input safari_only">
                    <button onClick={down} className="minus"></button>
                    <p id="wisdom" className="quantity">
                      {characterData.wisdom}
                    </p>
                    <button onClick={up} className="plus"></button>
                  </div>
                </h6>
                <h6>
                  Charisma:
                  <div className="def-number-input number-input safari_only">
                    <button onClick={down} className="minus"></button>
                    <p id="charisma" className="quantity">
                      {characterData.charisma}
                    </p>
                    <button onClick={up} className="plus"></button>
                  </div>
                </h6>
              </div>
              <button onClick={deleteCharacter} className="btn btn-danger">
                Delete Character
              </button>
            </div>
            <div className="col-md-6">
              <div className="form-group container">
                <h3 className="text-center">Adventuring Gear</h3>
                <label htmlFor="equipment-add">Add Adventuring Gear</label>
                <select className="form-control" id="equipment-add">
                  {items.map((item) => {
                    return <option key={item.index}>{item.name}</option>;
                  })}
                </select>
                <button className="mt-3 btn btn-info" onClick={addItem}>
                  Add gear
                </button>
              </div>

              <div className="row">
                <div
                  className="equipment col overflow-auto border"
                  style={{height: '20em'}}
                >
                  {characterGear.map((item, index) => {
                    return <CharacterGear key={index} equipment={item} />;
                  })}
                </div>
              </div>

              <div className="form-group container">
                <h3 className="text-center mt-5">Tools</h3>
                <label htmlFor="equipment-add">Add Tool</label>
                <select className="form-control" id="equipment-add">
                  {tools.map((item) => {
                    return <option key={item.index}>{item.name}</option>;
                  })}
                </select>
                <button className="mt-3 btn btn-info" onClick={addItem}>
                  Add tool
                </button>
              </div>

              <div className="row">
                <div
                  className="equipment col overflow-auto border"
                  style={{height: '20em'}}
                >
                  {characterTools.map((item, index) => {
                    return <CharacterTools key={index} equipment={item} />;
                  })}
                </div>
              </div>

              <div className="form-group container">
                <h3 className="text-center mt-5">Weapons</h3>
                <label htmlFor="equipment-add">Add Weapon</label>
                <select className="form-control" id="equipment-add">
                  {weapons.map((weapon) => {
                    return <option key={weapon.index}>{weapon.name}</option>;
                  })}
                </select>
                <button className="mt-3 btn btn-info" onClick={addItem}>
                  Add weapon
                </button>
              </div>

              <div className="row">
                <div
                  className="equipment col overflow-auto border"
                  style={{height: '20em'}}
                >
                  {characterWeapons.map((item, index) => {
                    return <CharacterWeapons key={index} equipment={item} />;
                  })}
                </div>
              </div>

              <div className="form-group container">
                <h3 className="text-center mt-5">Armor</h3>
                <label htmlFor="equipment-add">Add Armor</label>
                <select className="form-control" id="equipment-add">
                  {armor.map((item) => {
                    return <option key={item.index}>{item.name}</option>;
                  })}
                </select>
                <button className="mt-3 btn btn-info" onClick={addItem}>
                  Add armor
                </button>
              </div>

              <div className="row">
                <div
                  className="equipment col overflow-auto border"
                  style={{height: '20em'}}
                >
                  {characterArmor.map((item, index) => {
                    return <CharacterArmor key={index} equipment={item} />;
                  })}
                </div>
              </div>

              <div className="form-group container">
                <h3 className="text-center mt-5">Spells</h3>
                <label htmlFor="spell-add">Add Spells</label>
                <select className="form-control" id="equipment-add">
                  {spells.map((spell) => {
                    return <option key={spell.index}>{spell.name}</option>;
                  })}
                </select>
                <button className="mt-3 btn btn-info" onClick={addSpell}>
                  Add Spell
                </button>
              </div>

              <div className="row">
                <div
                  className="col overflow-auto border"
                  style={{height: '20em', marginBottom: '10em'}}
                >
                  {characterSpells.map((spell, index) => {
                    return <CharacterSpells key={index} spell={spell} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CharacterPage;
