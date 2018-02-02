import axios from "axios"
import {compose} from "redux"

const catFactsUrl = "http://cors-proxy.htmldriven.com/?url=https://catfact.ninja/facts?limit=25"
const catImagesUrl = "http://thecatapi.com/api/images/get?format=xml&results_per_page=25"
function urlTagStringToUrl (urlTagString) { return urlTagString.trim().replace(/^<url>/, "").replace(/<\/url>$/, "") }
function xmlToUrls (xmlString) { return xmlString.match(/<url>.*<\/url>/g).map(urlTagStringToUrl) }
function getCatFacts () { return axios.get(catFactsUrl).then(response => JSON.parse(response.data.body).data.map(d => d.fact)) }
function getCatImages () { return axios.get(catImagesUrl).then(response => xmlToUrls(response.data)) }
function byFactLength (cat1, cat2) { return cat1.fact.length - cat2.fact.length }
function sortByFactLength (list) { return list.slice().sort(byFactLength) }
function selectShortest (shortest, list) { return shortest.length < list.length ? shortest : list }
function zipAll (keys, ...lists) {
  return lists.reduce(selectShortest)
  .map((_, index) => Object.assign.apply(0, lists.map((list, listIndex) => ({[keys[listIndex]]: list[index]}))))
}
function numList (n) { return Object.keys(Array.apply(0, Array(n))).map(Number) }
function zipCatFactsAndImages ([catFacts, catImages]) { return zipAll(["fact", "src", "id"], catFacts, catImages, numList(catFacts.length)) }

export function setState (state) {
  return {
    type: "SET_STATE",
    state
  }
}

export function removeCat (id) {
  return {
    type: "REMOVE_CAT",
    id
  }
}

export function fetchCatsSuccess (cats) {
  return {
    type: "FETCH_CATS_SUCCESS",
    cats
  }
}

export function fetchCatsRequest () {
  return dispatch => {
    dispatch({type: "FETCH_CATS_REQUEST"})
    return axios
    .all([getCatFacts(), getCatImages()])
    .then(compose(dispatch, fetchCatsSuccess, sortByFactLength, zipCatFactsAndImages))
  }
}
