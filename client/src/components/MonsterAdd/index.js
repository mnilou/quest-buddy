import React from "react";

function MonsterAdd(props) {
    const styles = {
        container: {
            boxShadow: "5px 10px 5px #9E9E9E",
            outline: 'none',
            marginBottom: '1rem',
            marginTop: '1rem',
            border: 'none',
        },
      };
    return (
        <div style={styles.container}>
            <h4 className="mt-2 mb-4">The Monsters We Faced!</h4>
            <div className="form-group">
                <select className="form-control">
                    {props.monsters.map(APIMonster => {
                        // console.log(item);
                        return <option id={APIMonster.index} key={APIMonster.index}>{APIMonster.name}</option>

                    })}
                    {/* <option>Test</option> */}
                </select>
                <button className="mt-3 btn btn-danger" onClick={props.handleAddMonster}>Add Monster</button>
            </div>
            <div className="overflow-auto">
                {(props.campaignMonsters.length < 1) ?
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title text-center">No Monsters Added Yet</h5>
                            <p className="card-text text-center">Find ye opponents to face in mortal combat!</p>
                          </div>
                        </div>
                :
                props.campaignMonsters.map(monster => {
                    let enemyType = monster.type.split("");
                    enemyType[0] = enemyType[0].toUpperCase();
                    enemyType = enemyType.join('');
                    // console.log(enemyType)
                    // monster.type[0].toUpperCase()
                    return <div className="card" style={styles.container}>
                        <h5 className="card-title">{monster.name}</h5>
                        <p className="card-text">HP: {monster.hit_points}</p>
                        <p className="card-text">Damage: {monster.hit_dice}</p>
                        <p className="card-text">Size: {monster.size}</p>
                        <p className="card-text">Type: {enemyType}</p>
                    </div>
                })}

            </div>

        </div>
    );
}

export default MonsterAdd;