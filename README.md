# Campaign Planner

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Tabletop gaming, including Dungeon and Dragons, is being rediscovered by current generations and is growing substantially.  According to journalists at sites such as the NYT, “[Dungeons and Dragons] has made a surprising return to mainstream culture,” and the maker of the game said “2018 was the fifth consecutive year of double-digit growth for D&D, and its best sales year ever.”  Needless to say, the game is exploding and so too is the number of online tools and apps to allow users to better run a campaign.  

However, a glaring omission in the existing toolsets is the ability to both track your characters/sessions/campaigns and to schedule meet-ups.  All too often, teams have to use a second app, such as Facebook or Zoom, to track their meetups.  And there is no single record of what happened at each session.  This app simplifies the life of every adventurer and dungeon master by allowing them to download the app, make teams, schedule meetings directly, and keep a record of all past sessions.  No longer will players have to jump between multiple apps just to play the game and know when the next session will be and where.  

## Screenshots
<img width="1389" alt="Screen Shot 2020-11-23 at 1 24 40 PM" src="client\public\screenshot.jpg"> 
<img width="1389" alt="Screen Shot 2020-11-23 at 1 24 40 PM" src="client\public\screenshot-user.jpg"> 
<img width="1389" alt="Screen Shot 2020-11-23 at 1 24 40 PM" src="client\public\screenshot-campaign.jpg"> 

## Table of contents

- [License](#License)
- [Description](#Description)
- [Screenshots](#Screenshots)
- [Installation](#Installation)
- [Usage](#Usage)
- [Link](#link)
- [Contributors](#Contributors)
- [Technology](#Technology)

## Installation

Add a .env at the top level of this project.

Then inside of the .env add a SERVER_SECRET set to any value you'd like

```
SERVER_SECRET = 123456
```

Start by installing front and backend dependencies. While in the root directory, run the following command:

```
npm install
```

After all installations complete, run the following command in your terminal:

```
npm start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Usage

As an avid Dungeons and Dragons player who often has multiple campaigns running at once, I want to have a place to schedule and organize my games, so that I can better run Dungeons and Dragons sessions with my friends. 

## Deployed Link (Heroku)

>[Campaign Planner](https://campaign-planner-nat20.herokuapp.com/)

>[Github Repo](https://github.com/mnilou/quest-buddy)

## Contributors

> Chris Cruzcosa, Joshua Bidwell and Nilou Mostofi

## Technology

- REACT 
- Javascript
- Node.js
- Mongoose
- Express 
- Axios 
- DOTENV 
- D&De5 API
- FullCalendar API

