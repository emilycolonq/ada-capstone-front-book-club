# ADA Book Club (Frontend)

ADA Book Club is a web app that makes it easy for small groups of friends to organize mini book clubs online. As a user, you can search for books to create a group for. As a member of the group, users can update their page progress, create new topics in the forum and add comments to existing topics.

## Feature Set:

Book Search - users can look for books and create groups based on the book they select

Page Tracker - each group page will have a page tracker for each user (who is a member of group) to update and see everyone's progress

Forum - each group page will have a forum where users who are a member of the group can add topics and comment on existing topics 

Invite friends to group(unable to get to this portion)

Scheduler widget(unable to get to this portion)

## Built with:

React JS

Google Books API

Bootstrap

Axios

*Connected to our backend: https://github.com/mcatcruz/ada-capstone-book-club


## Setting Up

### Installations:
1. Clone this repo: `git clone {the url to this GitHub repo}`
2. 'cd' into this new folder
3. Install dependencies: `npm install`
4. Install bootstrap: `npm install bootstrap@3`
5. Install axios: `npm install axios`
6. Run React project: `npm start`


### Connecting to backend:
Add `BOOK_CLUB_BACKEND = "https://ada-capstone-book-club.herokuapp.com/adabookclub/"` to your `.env` file


### Google Books API:

1. Register your application using the Google API Console: https://console.developers.google.com/home/
2. Get the `client_id` once your project has been created and add it to your `.env` file: `client_id= "yours here"`
