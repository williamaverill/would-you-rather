# README

## To Install & Start

Install with `npm install`

Launch with `npm start`

## Description

Would You Rather? is a React application that allows multiple users to login and play the game of whether they would rather choose to do either option A) or option B) for a given a poll. Some polls will be answered and others will be unanswered at any given time. The user has the ability to view both types of polls from the "Home" screen. The user can view who they are logged in as and he or she also has access to a leaderboard, which shows who has created and answered the most polls in descending order. Polls are ararnged from the most recently created to the least recently created and also have details which show the profile of the user who craeted each poll as well as the two options to choose from. For answered polls, each of the two options has the following: the text of the option, the number of people who voted for that option, and the percentage of people who voted for that option. The logged in user can also clearly see which option he or she has selected for any answered poll. The application state at any given time is managed by `Redux` and the polls themseleves are accessed via a `backend API`.
