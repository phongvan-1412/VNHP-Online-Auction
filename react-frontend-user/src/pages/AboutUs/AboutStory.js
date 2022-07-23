import React from 'react';

const AboutStory = () => {
    return(
        <div className="about-story-wrapper">
            <div className="title1">VNHP's Grocery</div>
            <div className="title2">OUR STORY</div>

            <br />

            <div className="row about-story-content-wrapper" style={{margin: "0px", padding: "0px"}}>
                <div className="container about-story-content1" style={{margin: "0px", padding: "0px"}}>
                    <div className="col-md-6 about-story-content1-paragraph1">
                        The exciting world of public auctions
                        The VNHP Online Auction portal is a unique web site which brings together the auctions’ arena of collectibles items in Viet Nam, including art, antiques, Judaica, jewelry and more…
                        The portal and the VNHP Online Auction application enable to view spectacular catalogs, search for items and participating in live auctions.
                    </div>

                    <div className="col-md-6 about-story-content1-paragraph2">
                        VNHP Online Auction was established in 2022 and provides auction houses with an innovative interface to conduct auctions online, in real time. Today, VNHP Online Auction is used by most auction houses in Viet Nam.
                    </div>
                </div>

                <div className="container" style={{margin: "0px", padding: "0px"}}>
                    <h3 className="col-md-12 about-story-headline">What Is A Live Auction?</h3>
                    <div className="col-md-12 about-story-content2">
                        <span className="col-md-4 about-story-content2-paragraph1">
                            Live auctions are simulcast events that allow people to bid for items online at the same time as those on the auction floor. 
                        </span>

                        <span className="col-md-4 about-story-content2-paragraph2">
                            With live bidding, you can access auctions around the world and get in on all the action, right from your own computer. Theres no software to download or special tools to buy. Just become a member, and you’re ready to bid!
                        </span>

                        <span className="col-md-4 about-story-content2-paragraph3">
                            You can learn more about how live auctions work and how to register to bid here.
                        </span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default AboutStory;