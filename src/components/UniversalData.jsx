import React, { Component } from 'react';

class UniversalData extends Component {
    constructor () {
    super();    
    this.state = {  
        random_image_number: 0

        }
    }

    toggleImage = (id) => {
        const isXs = window.innerWidth < 576;
        const changeDiv = document.getElementById(id)
        const imageNotShown = changeDiv.classList.contains("d-none")

        isXs && imageNotShown ? changeDiv.classList.remove('d-none') : changeDiv.classList.add('d-none')
    }

    componentDidMount = () => {
        this.setState({ random_image_number: (Math.floor(Math.random() * 27) + 1)});
        this.scrollToTop();
    }

    scrollToTop = () => {
    window.scrollTo({
        top: 0
    });
    }
    render() { 
        let { random_image_number } = this.state;
        
        return ( 
            <div className="content-container container col-lg-9 col-md-11 col-sm-12">
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("6M")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="6M">
                        <img alt="6M" className="img-fluid"src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/6M/image+(' + random_image_number + ').png' }></img>
                    </div>
                    
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>Input: 6M</u>
                                </h4>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   24 
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  6
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    10
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   +0 (block), +3 (hit)
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   High
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                        Can cancel into air action while in sparking.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("Assist")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="Assist">
                        <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/assist.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Assists
                                    </u>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: Assist Button 1 or 2                                    
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   Varies
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Each character comes equipped with 3 assists. Assists will not begin recharging until the opponent has not been in blockstun for 20 frames.
                                    Once recharging has begun, A and B Type assists take 300 frames to charge. C assist Tpe will take 720 frames.							
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("DR")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="DR">
                        <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/dragon rush.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Dragon Rush
                                    </u>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: L + M                                    
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   19 
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  9
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    24
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   Throw
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Green flash at 7f, Snapping at the very end adds more damage. Holding Dragon Rush during grab adds more hits.								
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("DRS")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="DRS">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/snap.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Dragon Rush Snap
                                    </u>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: L + M (+ assist button during Dragon Rush)                                    
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   N/A 
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    Instant
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   41
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                        Opponent 8f throw invulnerable upon getting snapped in.
                                        Removes all blue health of character being snapped in.																				
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("SD")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="SD">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/superdash.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Super Dash
                                    </u>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: H + S                                    
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   Minimum 21, Fullscreen 34
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  Until Contact
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    10
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   0, +5 (In spark)
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   All
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                        Light projectile invuln frame 1 through active, Airborne on frame 5.																								
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("REF")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="REF">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/reflect.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Reflect
                                    </u>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 4 + S                                    
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   1
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  22
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:   17
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Succesful reflect enters 20 frame total invulnerability recovery period, throw invuln for 4 frames after recovery. Attacks dealt on reflect behave as on block (chains, blockstop etc.)																																	
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("GC")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="GC">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/gaurd cancel.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Guard Cancel
                                    </u>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 6 + Assist on block                                
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   Corner 21, ~28 Full
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  2
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    10
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   -30 [20 air, 10 ground]
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   All
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Cost 1 bar.
                                    <br></br> 
                                    Invuln from frame 1 through actives or entering recovery, 
                                    Freeze frame for 25 frames, becomes active in proximity, 
                                    turns into SD upon connecting or whiff.																																	
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("GCS")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="GCS">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/gaurd cancel solo.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Guard Cancel (Solo)
                                    </u>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 6 + Assist on block                                
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   15
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  3
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    25
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   -12
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   All
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Cost 1 bar.
                                    <br></br> 
                                    Invuln from frames 1 - 33, Freeze frame for 25 frames, Disappears on frame 4.																																													
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("VAN")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="VAN">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/vanish.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Vanish
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: M + H                               
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   13
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  3
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    14
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   0, +2 when landing canceled
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   All
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Cost 1 bar.
                                    <br></br> 
                                    Invulnerable frames 4 - 8 (swaps sides, appears on frame 12), freeze frame on frame 7 and lasts for 40 frames.																																													
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("EVS")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="EVS">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/empty vanish.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Empty Vanish (Spark Only)
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: [M + H]                               
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  11 total animation frames
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   All
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Cost 1 bar.
                                    <br></br> 
                                    Invulnerable frame 4 - 8 (swaps sides, appears on frame 12 - recovers on the frame they appear), freeze frame on frame 7 and lasts for 40 frames.							                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("Spark")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="Spark">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/spark.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Spark
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: L + M + H + S                              
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   7
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    Ground: 24 + landing, Air: 27
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   0f, -1 attack, -3 movement
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   All
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Usable once per match.
                                    <br></br> 
                                    Invulnerable frame 1 - 15, basically has added 3 frames cancellable landing recovery which causes move to be pseudo negative on block.
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("Jump")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="Jump">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/jump.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Jump
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 8                              
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   4
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Throw invulnerable frame 1 - 4, Normal/Special/Vanish/SD cancellable on frame 6 (2nd frame airborne), Airdash cancellable on frame 8, can block on frame 5.									
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("SuperJump")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="SuperJump">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/sj.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Super Jump
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 2 > 8                              
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Super-Jump sends you higher into the air.  Makes jump take 60 frames. (Based on counting from first pre-jump frame until they land.)	Majin Buu has different values: 63 frames							    
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("SuperJumpFloat")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="SuperJumpFloat">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/sjfloat.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Super Jump Float
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 2 > [8]                               
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Super-Jump sends you higher into the air.  Makes jump take 71 frames. (Based on counting from first pre-jump frame until they land.)
                                    Holding 8 lets you float down slower.	
                                    Majin Buu has different values: 68 frames	    						
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("SuperJumpFastFall")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="SuperJumpFastFall">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/sjfastfall.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Super Jump Fast Fall
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 2 > 8 > [2]                               
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Super-Jump sends you higher into the air.  Makes jump take 42 frames. (Based on counting from first pre-jump frame until they land.)
                                    Holding 2 lets you fall down faster.	
                                    Majin Buu has different values: 49 frames	    						
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("FAD")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="FAD">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/forward air dash.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Forward Air Dash
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 6 > 6 while airborne                              
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   1
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  Animation frame 10
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Normal/special/SD/Vanish cancellable from frame 7 and forward. (cannot block until animation is done.)				                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("ABD")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="ABD">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/air backdash.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Air Backdash
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 4 > 4 while airborne                              
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   1
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  Animation frames 15
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Normal/special/SD/Vanish cancellable from frame 7 and forward. (cannot block until animation is done.)
                                    <br></br>
                                    Throw invulnerable frames 1 - 15, any move cancelled from the dash will inherit throw invulnerability for the amount left on airdash recovery (i.e. cancelling to a jL on frame 11 will inherit throw invulnerability from frame 11 - 15.)												
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("IAD")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="IAD">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/instant air dash.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: IAD Forward
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 9 > 5 > 6                              
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:   5 + 2 + 6 + normal
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    4th frame of jump is airdash cancellable, airdash takes 6f until cancellable.			                                    
                                    <br></br>
                                    Fastest possible IAD overhead is 19 frames, when using a 6 frame overhead [5 frame Jump start-up + 2 frame to reach cancel + 6 frame airdash + normal]
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("BD")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="BD">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/backdash.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Backdash
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 4 > 4                             
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:  1
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  15 frame animation
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                        Throw invulnerable frame 1 - 15, movement on frame 2.	
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("GR")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="GR">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/ground-recovery.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Ground Recovery
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: Landing                            
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:  N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  3
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                        Cancellable with normals / forward dash on frame 2. Can block on frame 1 of landing.						
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("Clash")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="Clash">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/clash.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Clash
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: N/A                            
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:  N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  3
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                        Clash is treated as connecting on block with the added option of being able to cancel to reflect and from some 4/5L's to another 4L. Freezes for 22 frames on clash.														
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("GT")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="GT">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/groundtech.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Ground Tech
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: N/A                            
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:  N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  Animation 22 frames
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Full invulnerable during tech, Throw invulnerable for 8 frames after tech, Ground back/in place techs suffer immediate standard landing recovery after teching has finished.												
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("DT")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="DT">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/delay tech.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Delay Tech
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 2 (While downed)                            
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:  N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  Animation 15 frames
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Full invulnerable during tech, Throw invulnerable for 8 frames after tech, Ground back/in place techs suffer immediate standard landing recovery after teching has finished. Can delay from 0 - 30 frames.											
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row universal-move">
                    <div className="col d-block d-sm-none">
                        <div className="mx-auto d-block d-sm-none">
                            <p className="image-toggle mx-auto" onClick={() => this.toggleImage("DTA")}>
                                <u>Toggle Image</u>
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-5 d-none d-sm-block' id="DTA">
                    <span className="helper"></span><img alt="move-gif" className="img-fluid" src={'https://dbfz-image.s3.amazonaws.com/uploads/static-images/down tech.gif' }></img>
                    </div>
                    <div className='col-sm'>
                        <div className="row">
                            <div className="col mx-auto">
                                <h4 className="">
                                    <u>
                                        Name: Down Tech (Airborne)
                                    </u>
                                </h4>   
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-auto">
                                <h5 className="">
                                    Input: 2 (before teching out)                            
                                </h5>
                            </div>
                        </div>

                        <div className="col mt-1">                                 
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Startup:  N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Active:  Animation 15 - 26 frames
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">  
                                <div className="col-sm-7">
                                    <p className="">
                                        Recovery:    N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <p className="">
                                        Advantage:   N/A
                                    </p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-7">
                                    <p className="">
                                        Guard:   N/A
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm">
                                    <p className="text-left notes-box">
                                        Notes: 
                                    </p>
                                    <p className="text-left notes-box">
                                    Full invulnerable during tech, Throw invulnerable for 8 frames after tech, Ground back/in place techs suffer immediate standard landing recovery after teching has finished. Can delay from 0 - 30 frames. Standard landing recovery (5 frame invulnerable landing recovery if lands during tech invulnerability), Can recover before touching ground.											
                                    </p>							                                
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UniversalData;