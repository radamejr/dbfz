import React, { Component } from 'react';

class Basics extends Component {
    constructor () {
        super();
        this.state = {

        }
    }
    render() { 
        return (  
            <div>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>What is Dragonball Fighterz?</u></h4>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/logo.png" alt="logo"></img>
                    </div>
                    <div className="col-sm text-left">
                        <p>
                        Dragonball Fighterz is a 2D anime fighting game developed by Arc System Works and published by Bandai Namco based on the, you guessed it, Dragonball franchise. It has 3 vs 3 team based combat  with over 35 (including DLC) characters on its roster. Influence from similar games can be seen in its gameplay such as the Marvel Vs Capcom series.
                        </p>
                        <p>
                        It also utilizes techniques from the Dragonball franchise to help elevate its unique gameplay. This includes a full screen homing attack called Superdash and the ability to Vanish attack behind the opponent. The game also allows you to summon Shenron, after obtaining the the 7 Dragon Balls within a single match to grant one of 4 wishes.
                        </p>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>How do I do stuff in this game?</u></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm text-left">                       
                        <br></br>
                        <br></br>
                        <p>
                        If you are new to fighting games in general, Dragonball Fighterz follows the same moveset as others. You can move in any of the 8 directions available. However, rather than typing out those individual directions, EG: Up, Up-Right ETC, we use numpad notation. This allows you to very easily identify the direction of an input by simply looking at your numpad. 
                        </p>
                    
                        <p>
                        Typically, these notations assume you are in the player 1 slot, or facing right. Every character in the game has access to the basic buttons Light (L), Medium (M), Heavy (H) and Special (S) (Normals). These buttons only apply to the active character currently out on the screen. You can also do Special Moves by input motions in addition to normal buttons, such as 236S for Goku's Kamehamhe. Super Moves use both motions and two normal inputs, like 236H+S.
                        </p>
                    </div>
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid input" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/numpad_notation.jpg" alt="input"></img>
                    </div>
                </div>
                <br></br>

                <hr></hr>

                <br></br>

                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>Blocking</u></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid input" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/block.gif" alt="blocking"></img>
                    </div>
                    <div className="col-sm text-left">
                        <p>
                        Blocking is done by pressing, 4 (back, remember our input image) against the opponents moves. Some moves have a low property which means you must block low (press 1) and some moves have overhead properties which means you must block high (still 4) or block while jumping. If you block a move in the air you are subject to additional blockstun when landing.
                        </p>
                    </div>
                    
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>Superdash</u></h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm text-left">
                        <p>
                        Superdash activates when you press H + S (Heavy and Special) together. Your point character will channel their inner Ki and fly towards the opponent. Superdash will continue chasing the enemy until you either hit the enemy or get hit yourself. During Superdash, you are immune to Ki-blasts. 
                        </p>
                    </div>
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid move-gif" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/superdash.gif" alt="superdash"></img>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>Vanish</u></h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid move-gif" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/vanish.gif" alt="vanish"></img>
                    </div>
                    <div className="col-sm text-left">
                        <p>
                        Vanish is activated by hitting M + H. Upon activation, you will teleport behind the enemy and strike them, during the teleport you are immune. The first time this is done during a combo, you will receive a wall bounce allowing follow-up. Vanish costs one (1) bar. 
                        </p>
                    </div>
                    
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>Dragon Rush</u></h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm text-left">
                        <p>
                        Dragon Rush is activated by hitting L + M. This is Dragonball Fighterz throw. Cannot hit the opponent while they are in blockstun. If the opponent is hit first by the Dragon Rush, you get a launcher follow up. If done during a combo, gives a sliding knockdown. As a defender you can tech Dragon Rush to stop the grab.
                        </p>
                    </div>
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid move-gif" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/dragon%20rush.gif" alt="grab"></img>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>Ultimate Z-change</u></h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid move-gif" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/DHC.gif" alt="z-change"></img>
                    </div>
                    <div className="col-sm text-left">
                        <p>
                        Ultimate Z-Change allows you to change into an assists Super Attack without having to first use the point characters. This can be very useful when trying to swap characters in to heal them. This is done by inputing 41236 + A1/A2(whichever assist slot you are swapping).
                        </p>
                    </div>
                    
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>Ki-Charge</u></h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm text-left">
                        <p>
                        Activated by pressing L + S. Your character will charge their Ki. You can either hold Ki-charge, or just press the buttons for a brief half bar charge. Holding the buttons increases the rate that it charges.
                        </p>
                    </div>
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid move-gif" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/charge.gif" alt="charge"></img>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="text-center"><u>Sparking!</u></h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <span className="helper"></span>
                        <img className="img-fluid move-gif" src="https://dbfz-image.s3.amazonaws.com/uploads/static-images/spark.gif" alt="Sparking"></img>
                    </div>
                    <div className="col-sm text-left">
                        <p>
                        Sparking is activated by hitting L + M + H + S. Sparking can be activated in neutral, during a combo or while blocking. If activated during a combo, will pop the opponent high into the air allowing follow ups. Can only be activated once per match and lasts longer the less teammates you have. 
                        </p>
                        <ul>
                        <li>Attack power increases</li>
                        <li>Ki gain increases</li>
                        <li>Point character blue health regenerates at a very fast rate</li>
                        <li>Ground normals can be jump canceled, air normals can be dash canceled</li>
                        <li>6M can be special canceled</li>
                        <li>Super Dash has reduced pushback and can cancel into attacks immediately on block</li>
                        <li>Hold buttons during a Vanish to teleport behind the opponent without attacking and recover almost instantly</li>
                        <li>Assist cooldown will start to recover even while the opponent is in hitstun or blockstun</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}
 
export default Basics;