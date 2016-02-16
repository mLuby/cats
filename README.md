# Cats
![](cats.gif)

# Instructions
Clone down the repo and within it run `npm install && npm start`.

This will
1. start an express server to get around a CORS issue for one of the APIs,
2. start the webpack dev server which does hot-reloading, and
3. open the app in the browser where it will refresh and load.

# Basics
Using React/Redux:
1. Get cat images from "http://thecatapi.com/api/images/get?format=xml&results_per_page=25"
2. Get cat facts from "http://catfacts-api.appspot.com/api/facts?number=25"
3. Append the results to DOM.
  - One image will have one fact associated with it.
4. Be able to remove/delete images (with attached fact) from DOM.

# Bonus
- [x] Linting
- [x] ES6
- [ ] Tests
- [x] Grid Layout (sorta)
- [x] Basic Animation
- [ ] SASS
- [x] Sorting by length of fact.
- [ ] Adding additional pictures/quotes.
- [ ] Rearrange images on DOM.
- [ ] ˆcache to localstorage
- [ ] ˆrefactor to RxJs
- [ ] ˆallow local edits (localstorage)
