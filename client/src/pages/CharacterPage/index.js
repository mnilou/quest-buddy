import {React, useHistory, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import "./style.css";

function CharacterPage() {
    const {id} = useParams();
    const history = useHistory();
    const { user } = useAuth();

    return (
        <main class="container">
        <h3 class="mt-3 mb-4 text-center">R'end Stormrider</h3>
        <h4 class="mt-3 mb-4 text-center">D&D, 5th Edition</h4>
        <div class="row">
            <div class="col">
                <div class="row mt-2">
                    <div class="col-md-6 overflow-auto border" style={{height: "40em"}}>
                        <p class="mt-2"></p>
                        <h5>Race: High Elf</h5>
                        <h5>Class: Druid</h5>
                        <h5>Level:
                            <div class="def-number-input number-input safari_only">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus"></button>
                            </div>
                        </h5>
                        <br/>
                        <h5>Stats</h5>
                        <h6>Strength:
                            <div class="def-number-input number-input safari_only">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus"></button>
                            </div>
                        </h6>
                        <h6>Dexterity:
                            <div class="def-number-input number-input safari_only">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus"></button>
                            </div>
                        </h6>
                        <h6>Constitution:
                            <div class="def-number-input number-input safari_only">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus"></button>
                            </div>
                        </h6>
                        <h6>Intelligence: 
                            <div class="def-number-input number-input safari_only">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus"></button>
                            </div>
                        </h6>
                        <h6>Widsom: 
                            <div class="def-number-input number-input safari_only">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus"></button>
                            </div>
                        </h6>
                        <h6>Charisma: 
                            <div class="def-number-input number-input safari_only">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                    class="minus"></button>
                                <input class="quantity" min="0" name="quantity" value="1" type="number"/>
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                    class="plus"></button>
                            </div>
                        </h6>
                    </div>
                    <div class="col-md-6">


                        <div class="row">
                            <div class="col overflow-auto border" style={{height: "20em"}}>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Club</h5>
                                        <p class="card-text">Weapon / Melee
                                        </p>
                                        <p class="card-text">1d4 Dmg
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col overflow-auto border" style={{height: "20em"}}>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Acid Arrow</h5>
                                        <p class="card-text">A shimmering green arrow streaks toward a target within
                                            range and bursts in a spray of acid. Make a ranged spell attack against the
                                            target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid
                                            damage at the end of its next turn. On a miss, the arrow splashes the target
                                            with acid for half as much of the initial damage and no damage at the end of
                                            its next turn.
                                        </p>
                                        <p class="card-text">Evocation
                                        </p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Produce Flame</h5>
                                        <p class="card-text">"A flickering flame appears in your hand. The flame remains
                                            there for the duration and harms neither you nor your equipment. The flame
                                            sheds bright light in a 10-foot radius and dim light for an additional 10
                                            feet. The spell ends if you dismiss it as an action or if you cast it
                                            again.",
                                            "You can also attack with the flame, although doing so ends the spell. When
                                            you cast this spell, or as an action on a later turn, you can hurl the flame
                                            at a creature within 30 feet of you. Make a ranged spell attack. On a hit,
                                            the target takes 1d8 fire damage.",
                                            "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th
                                            level (3d8), and 17th level (4d8)."
                                        </p>
                                        <p class="card-text">Conjuration
                                        </p>
                                    </div>
                                </div>
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