const express = require('express')
require('dotenv').config()
//import express from "express"
 
const app = express()
const port = 4000

const gitHubData ={
    "login": "sagar2007S",
    "id": 197114837,
    "node_id": "U_kgDOC7-71Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/197114837?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sagar2007S",
    "html_url": "https://github.com/sagar2007S",
    "followers_url": "https://api.github.com/users/sagar2007S/followers",
    "following_url": "https://api.github.com/users/sagar2007S/following{/other_user}",
    "gists_url": "https://api.github.com/users/sagar2007S/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sagar2007S/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sagar2007S/subscriptions",
    "organizations_url": "https://api.github.com/users/sagar2007S/orgs",
    "repos_url": "https://api.github.com/users/sagar2007S/repos",
    "events_url": "https://api.github.com/users/sagar2007S/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sagar2007S/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sagar Baryekar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2025-01-30T17:18:48Z",
    "updated_at": "2025-03-29T11:20:31Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/whatsgram', (req,res) =>{
    res.send("<h1>Hello User</h1>");
})
app.get('/youtube', (req,res)=>{
    res.send("<h2>Welcome To My Youtube Channel</h2>")
})


app.json('/github', (res, res)=>{
    res.send(`<h1>${gitHubData.login}</h1>`)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})