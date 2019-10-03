# How to get around CORS
Keep in mind these instructions are for if you are completely doing this from scratch and not cloning my repo. If you are cloning my repo you can skip the npm i --save steps

## General Concept
Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

In short, as Phil would say "awwwww rough"

There are a few ways around this, one being to spin up your own server(proxy) to handle the requests so that the requests are coming from yourself instead of from the API's server. 

This is a demo on how to do that.

## Step 1
Make a directory with three files in it, html and two JavaScript files, one called app.js where your app will run, one called server.js.

## Step 2
Open terminal and cd to the directory

## Step 3
Run these commands:
```bash 
$npm init
```
Run through and hit enter until it is done initizing your NPM environment
```bash 
$npm i --save express
```
This will install express on there(for spinning up the actual server)
```bash 
$npm i --save request
```
This will install request for actually making the call to that server you are making

## Step 4
In the server.js file create an express app that will use the response header: 
```JavaScript
'Access-Control-Allow-Origin', '*'
```
This is how we get around CORS. 
Then make a get call to the place where the server will live, in my case:
```Javascript
/oxfordrequest/:word
```
:word is used to grab the word being sent to that url.
within that endpoint then using request make a request to the actual API endpoint, in my case this:
```JavaScript
https://od-api.oxforddictionaries.com/api/v2/lemmas/en/${req.params.word}
```
Please note I am adding request headers to my request(not always necessary)
At the very end of the server.js file I am explicitly telling where I would like my app to run, in my case:
```Javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
```

## Step 5
After this is done build your app in the app.js like regular and then when it comes time to make the request instead of making the API call to the API's url in the app.js file, make a request to the endpoint you want your server to run on, in this case I used:
```JavaScript
http://localhost:3000/oxfordrequest/${this.word}
```
this.word is being replaced with the input of the word I want to hit the API with. 

## Step 6
Open up terminal and get your server running
Then run your html file like normal.

## Step 7
Drink heavily until you forget having to do this to get around CORS
