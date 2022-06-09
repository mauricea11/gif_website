// const { response } = require("express")

// Global constants
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H'
const LIMIT = 9
const RATING = 'g'
const LANGUAGE = 'en' 
const SOURCE = new Map()

var qTerm = 'puppy'

//Queries
var gifArea = document.querySelector("#gif-section")

async function getResults(){
    let results = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${qTerm}&limit=${LIMIT}&rating=${RATING}&lang=${LANGUAGE}`)
    // .then(response => response.json()).then(returndata => returndata.data)

    console.log(results);

    SOURCE.set("one", `${results[0].images.orignal.url}`)

    // SOURCE.set("two", `${results[1].image.orignal.url}`)
    // SOURCE.set("three", `${results[2].image.orignal.url}`)
    // SOURCE.set("four", `${results[3].image.orignal.url}`)
    // SOURCE.set("five", `${results[4].image.orignal.url}`)
    // SOURCE.set("six", `${results[5].image.orignal.url}`)
    // SOURCE.set("seven", `${results[6].image.orignal.url}`)
    // SOURCE.set("eight", `${results[7].image.orignal.url}`)
    // SOURCE.set("nine", `${results[8].image.orignal.url}`)


}

function formSubmit(){
    searchVal = document.getElementById("searchGifs").value
    qTerm = searchVal
    getResults()
    displayGifs(results)
    searchVal.value = ""

}

function displayGifs(responseData){

    gifArea.innerHTML += `
    
        <img src=${SOURCE.get("one")}>
    `
    
}

// [
//     {
//         "type": "gif",
//         "id": "2yuRoYBGY027wAPYML",
//         "url": "https://giphy.com/gifs/tiktok-cute-dog-hi-2yuRoYBGY027wAPYML",
//         "slug": "tiktok-cute-dog-hi-2yuRoYBGY027wAPYML",
//         "bitly_gif_url": "https://gph.is/g/4AOmeOa",
//         "bitly_url": "https://gph.is/g/4AOmeOa",
//         "embed_url": "https://giphy.com/embed/2yuRoYBGY027wAPYML",
//         "username": "tiktok",
//         "source": "http://bit.ly/2BcAl0y",
//         "title": "Dog Love GIF by TikTok",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "bit.ly",
//         "source_post_url": "http://bit.ly/2BcAl0y",
//         "is_sticker": 0,
//         "import_datetime": "2019-03-06 01:18:00",
//         "trending_datetime": "1970-01-01 00:00:00",
//         "images": {
//             "original": {
//                 "height": "480",
//                 "width": "422",
//                 "size": "3186809",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "537233",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "487298",
//                 "webp": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "29",
//                 "hash": "6a908c324deaefe6f759c6ba3930d817"
//             },
//             "downsized": {
//                 "height": "480",
//                 "width": "422",
//                 "size": "1813553",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy-downsized.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "480",
//                 "width": "422",
//                 "size": "3186809",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "480",
//                 "width": "422",
//                 "size": "3186809",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "308",
//                 "width": "270",
//                 "mp4_size": "107628",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "480",
//                 "width": "422",
//                 "size": "68299",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy-downsized_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "176",
//                 "size": "555149",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "101948",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "151004",
//                 "webp": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "176",
//                 "size": "121027",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "66780",
//                 "webp": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "88",
//                 "size": "177959",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "40113",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "51694",
//                 "webp": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "88",
//                 "size": "7476",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "176",
//                 "size": "21111",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "227",
//                 "width": "200",
//                 "size": "687071",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "129139",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "186384",
//                 "webp": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "227",
//                 "width": "200",
//                 "size": "148474",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "82742",
//                 "webp": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "114",
//                 "width": "100",
//                 "size": "231909",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "47572",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "62954",
//                 "webp": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "114",
//                 "width": "100",
//                 "size": "9515",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "227",
//                 "width": "200",
//                 "size": "26028",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "7420093",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "480",
//                 "width": "422",
//                 "size": "116871",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "544",
//                 "width": "480",
//                 "mp4_size": "537233",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "192",
//                 "width": "168",
//                 "mp4_size": "41934",
//                 "mp4": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "96",
//                 "width": "84",
//                 "size": "49333",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "124",
//                 "width": "110",
//                 "size": "46364",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "480w_still": {
//                 "height": "546",
//                 "width": "480",
//                 "size": "3186809",
//                 "url": "https://media1.giphy.com/media/2yuRoYBGY027wAPYML/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "user": {
//             "avatar_url": "https://media4.giphy.com/avatars/tiktok/78F6dPcUBc73.gif",
//             "banner_image": "https://media4.giphy.com/headers/tiktok/SRLJgKV9HbQK.gif",
//             "banner_url": "https://media4.giphy.com/headers/tiktok/SRLJgKV9HbQK.gif",
//             "profile_url": "https://giphy.com/tiktok/",
//             "username": "tiktok",
//             "display_name": "TikTok",
//             "description": "Get the app now  ↓   ↓  ↓\r\nhttp://vm.tiktok.com/mxhMwf/",
//             "instagram_url": "https://instagram.com/tiktok",
//             "website_url": "https://bit.ly/2BcAl0y",
//             "is_verified": true
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPTJ5dVJvWUJHWTAyN3dBUFlNTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJ5dVJvWUJHWTAyN3dBUFlNTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJ5dVJvWUJHWTAyN3dBUFlNTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJ5dVJvWUJHWTAyN3dBUFlNTCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "gxxlowyvtfS0M",
//         "url": "https://giphy.com/gifs/puppy-dog-run-gxxlowyvtfS0M",
//         "slug": "puppy-dog-run-gxxlowyvtfS0M",
//         "bitly_gif_url": "http://gph.is/XJlRgg",
//         "bitly_url": "http://gph.is/XJlRgg",
//         "embed_url": "https://giphy.com/embed/gxxlowyvtfS0M",
//         "username": "",
//         "source": "http://littleanimalgifs.tumblr.com/post/17697600748",
//         "title": "Safe For Work Dog GIF",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "littleanimalgifs.tumblr.com",
//         "source_post_url": "http://littleanimalgifs.tumblr.com/post/17697600748",
//         "is_sticker": 0,
//         "import_datetime": "2013-03-21 04:03:44",
//         "trending_datetime": "2021-03-24 00:39:09",
//         "images": {
//             "original": {
//                 "height": "186",
//                 "width": "250",
//                 "size": "994975",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "948967",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "451050",
//                 "webp": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "56",
//                 "hash": "08a038b931e828e956021b8aae0ffb8a"
//             },
//             "downsized": {
//                 "height": "186",
//                 "width": "250",
//                 "size": "994975",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "186",
//                 "width": "250",
//                 "size": "994975",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "186",
//                 "width": "250",
//                 "size": "994975",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "144",
//                 "width": "193",
//                 "mp4_size": "81008",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "186",
//                 "width": "250",
//                 "size": "994975",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "269",
//                 "size": "1111992",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "270233",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "458136",
//                 "webp": "https://media0.giphy.com/media/gxxlowyvtfS0M/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "269",
//                 "size": "131913",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "77168",
//                 "webp": "https://media0.giphy.com/media/gxxlowyvtfS0M/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "135",
//                 "size": "358494",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "87561",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "158806",
//                 "webp": "https://media0.giphy.com/media/gxxlowyvtfS0M/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "135",
//                 "size": "6608",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "269",
//                 "size": "19959",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "149",
//                 "width": "200",
//                 "size": "688945",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "167638",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "285640",
//                 "webp": "https://media0.giphy.com/media/gxxlowyvtfS0M/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "149",
//                 "width": "200",
//                 "size": "77513",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "47304",
//                 "webp": "https://media0.giphy.com/media/gxxlowyvtfS0M/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "75",
//                 "width": "100",
//                 "size": "222894",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "47896",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "104764",
//                 "webp": "https://media0.giphy.com/media/gxxlowyvtfS0M/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "75",
//                 "width": "100",
//                 "size": "4322",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "149",
//                 "width": "200",
//                 "size": "15701",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "3160498",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "186",
//                 "width": "250",
//                 "size": "18334",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "356",
//                 "width": "480",
//                 "mp4_size": "948967",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "148",
//                 "width": "198",
//                 "mp4_size": "45457",
//                 "mp4": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "62",
//                 "width": "83",
//                 "size": "49059",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "124",
//                 "width": "166",
//                 "size": "39516",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "480w_still": {
//                 "height": "357",
//                 "width": "480",
//                 "size": "994975",
//                 "url": "https://media0.giphy.com/media/gxxlowyvtfS0M/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPWd4eGxvd3l2dGZTME0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWd4eGxvd3l2dGZTME0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWd4eGxvd3l2dGZTME0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWd4eGxvd3l2dGZTME0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "ZFFVNwIbjsKtP3lHYK",
//         "url": "https://giphy.com/gifs/justviralnet-funny-dog-corgi-ZFFVNwIbjsKtP3lHYK",
//         "slug": "justviralnet-funny-dog-corgi-ZFFVNwIbjsKtP3lHYK",
//         "bitly_gif_url": "https://gph.is/g/4gA352X",
//         "bitly_url": "https://gph.is/g/4gA352X",
//         "embed_url": "https://giphy.com/embed/ZFFVNwIbjsKtP3lHYK",
//         "username": "justviralnet",
//         "source": "https://viralapk.com/27-funniest-tweets-of-the-day-to-change-your-mood/",
//         "title": "Dog Playing GIF by JustViral.Net",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "viralapk.com",
//         "source_post_url": "https://viralapk.com/27-funniest-tweets-of-the-day-to-change-your-mood/",
//         "is_sticker": 0,
//         "import_datetime": "2020-03-23 00:48:55",
//         "trending_datetime": "0000-00-00 00:00:00",
//         "images": {
//             "original": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "10035122",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "1460789",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "1533074",
//                 "webp": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "225",
//                 "hash": "8d3769cb8c506673726be0ce2ead8e24"
//             },
//             "downsized": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "1453689",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-downsized.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "6541039",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-downsized-large.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-large.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "2192219",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-downsized-medium.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-medium.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "192",
//                 "width": "192",
//                 "mp4_size": "192716",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "33446",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-downsized_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "1923685",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "417473",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "585578",
//                 "webp": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "53268",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "33000",
//                 "webp": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "693452",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "162462",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "284160",
//                 "webp": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "3640",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "8820",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "1923685",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "417473",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "585578",
//                 "webp": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "53268",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "33000",
//                 "webp": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "693452",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "41854",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "284160",
//                 "webp": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "3640",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "8820",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "1387867",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "49699",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "480",
//                 "width": "480",
//                 "mp4_size": "1460789",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "316",
//                 "width": "316",
//                 "mp4_size": "36346",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "76",
//                 "width": "76",
//                 "size": "48194",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "262",
//                 "width": "262",
//                 "size": "33078",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "hd": {
//                 "height": "960",
//                 "width": "960",
//                 "mp4_size": "3788896",
//                 "mp4": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/giphy-hd.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-hd.mp4&ct=g"
//             },
//             "480w_still": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "10035122",
//                 "url": "https://media1.giphy.com/media/ZFFVNwIbjsKtP3lHYK/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "user": {
//             "avatar_url": "https://media0.giphy.com/avatars/justviralnet/YrLI9PNklC7O.png",
//             "banner_image": "https://media0.giphy.com/headers/justviralnet/YIfCTjGdO4C3.jpg",
//             "banner_url": "https://media0.giphy.com/headers/justviralnet/YIfCTjGdO4C3.jpg",
//             "profile_url": "https://giphy.com/justviralnet/",
//             "username": "justviralnet",
//             "display_name": "JustViral",
//             "description": "Trending Technology World",
//             "instagram_url": "",
//             "website_url": "https://trendywebz.com/",
//             "is_verified": false
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPVpGRlZOd0lianNLdFAzbEhZSyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpGRlZOd0lianNLdFAzbEhZSyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpGRlZOd0lianNLdFAzbEhZSyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpGRlZOd0lianNLdFAzbEhZSyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "P2hdI6VaKlFhxncQG9",
//         "url": "https://giphy.com/gifs/P2hdI6VaKlFhxncQG9",
//         "slug": "P2hdI6VaKlFhxncQG9",
//         "bitly_gif_url": "https://gph.is/g/4MKJNJR",
//         "bitly_url": "https://gph.is/g/4MKJNJR",
//         "embed_url": "https://giphy.com/embed/P2hdI6VaKlFhxncQG9",
//         "username": "billym2k",
//         "source": "",
//         "title": "Puppy Doge GIF by Shibetoshi Nakamoto",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "",
//         "source_post_url": "",
//         "is_sticker": 0,
//         "import_datetime": "2021-03-08 02:50:00",
//         "trending_datetime": "2022-03-27 08:15:09",
//         "images": {
//             "original": {
//                 "height": "308",
//                 "width": "480",
//                 "size": "1191079",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "231841",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "292968",
//                 "webp": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "20",
//                 "hash": "bd9e0fafaba827ca4b37a0d3e579d040"
//             },
//             "downsized": {
//                 "height": "308",
//                 "width": "480",
//                 "size": "1191079",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "308",
//                 "width": "480",
//                 "size": "1191079",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "308",
//                 "width": "480",
//                 "size": "1191079",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "268",
//                 "width": "417",
//                 "mp4_size": "102682",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "308",
//                 "width": "480",
//                 "size": "1191079",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "312",
//                 "size": "413715",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "110289",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "150278",
//                 "webp": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "312",
//                 "size": "141665",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "86822",
//                 "webp": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "156",
//                 "size": "139914",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "39587",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "63218",
//                 "webp": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "156",
//                 "size": "8606",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "312",
//                 "size": "21231",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "128",
//                 "width": "200",
//                 "size": "216713",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "55014",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "85296",
//                 "webp": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "128",
//                 "width": "200",
//                 "size": "68970",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "41086",
//                 "webp": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "64",
//                 "width": "100",
//                 "size": "69947",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "20680",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "34090",
//                 "webp": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "64",
//                 "width": "100",
//                 "size": "4075",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "128",
//                 "width": "200",
//                 "size": "13807",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "2654905",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "308",
//                 "width": "480",
//                 "size": "86203",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "308",
//                 "width": "480",
//                 "mp4_size": "231841",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "132",
//                 "width": "205",
//                 "mp4_size": "36002",
//                 "mp4": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "58",
//                 "width": "90",
//                 "size": "47367",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "114",
//                 "width": "178",
//                 "size": "43644",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "480w_still": {
//                 "height": "308",
//                 "width": "480",
//                 "size": "1191079",
//                 "url": "https://media3.giphy.com/media/P2hdI6VaKlFhxncQG9/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "user": {
//             "avatar_url": "https://media2.giphy.com/avatars/billym2k/BQrqM4lNlVvw.jpeg",
//             "banner_image": "https://media2.giphy.com/headers/billym2k/F0L4BdeilArT.gif",
//             "banner_url": "https://media2.giphy.com/headers/billym2k/F0L4BdeilArT.gif",
//             "profile_url": "https://giphy.com/billym2k/",
//             "username": "billym2k",
//             "display_name": "Shibetoshi Nakamoto",
//             "description": "Dogecoin is an open source peer-to-peer digital currency, favored by Shiba Inus worldwide.",
//             "instagram_url": "",
//             "website_url": "",
//             "is_verified": false
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPVAyaGRJNlZhS2xGaHhuY1FHOSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVAyaGRJNlZhS2xGaHhuY1FHOSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVAyaGRJNlZhS2xGaHhuY1FHOSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVAyaGRJNlZhS2xGaHhuY1FHOSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "5tw4zQVwKT5OwTTdry",
//         "url": "https://giphy.com/gifs/cute-aww-eyebleach-5tw4zQVwKT5OwTTdry",
//         "slug": "cute-aww-eyebleach-5tw4zQVwKT5OwTTdry",
//         "bitly_gif_url": "https://gph.is/2pGulHk",
//         "bitly_url": "https://gph.is/2pGulHk",
//         "embed_url": "https://giphy.com/embed/5tw4zQVwKT5OwTTdry",
//         "username": "",
//         "source": "https://www.reddit.com/r/Eyebleach/comments/9m1r0k/take_me_for_a_walk/",
//         "title": "Puppy Aww GIF",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "www.reddit.com",
//         "source_post_url": "https://www.reddit.com/r/Eyebleach/comments/9m1r0k/take_me_for_a_walk/",
//         "is_sticker": 0,
//         "import_datetime": "2018-10-07 06:07:03",
//         "trending_datetime": "2021-03-23 14:26:04",
//         "images": {
//             "original": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "31994522",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "1922392",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "6126980",
//                 "webp": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "195",
//                 "hash": "1375cacd529f068780dd96045a9fd31a"
//             },
//             "downsized": {
//                 "height": "192",
//                 "width": "192",
//                 "size": "1738822",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-downsized.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "271",
//                 "width": "271",
//                 "size": "5262349",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-downsized-large.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-large.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "236",
//                 "width": "236",
//                 "size": "3341461",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-downsized-medium.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-medium.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "152",
//                 "width": "152",
//                 "mp4_size": "183247",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "192",
//                 "width": "192",
//                 "size": "32720",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-downsized_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "6418308",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "850968",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "1820850",
//                 "webp": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "200681",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "56018",
//                 "webp": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "1680373",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "289901",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "554356",
//                 "webp": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "10043",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "35016",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "6418308",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "850968",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "1820850",
//                 "webp": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "200681",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "56018",
//                 "webp": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "1680373",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "44248",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "554356",
//                 "webp": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "10043",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "35016",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "2064238",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "169452",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "480",
//                 "width": "480",
//                 "mp4_size": "1922392",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "282",
//                 "width": "282",
//                 "mp4_size": "34925",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "77",
//                 "width": "77",
//                 "size": "48588",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "130",
//                 "width": "130",
//                 "size": "48654",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "hd": {
//                 "height": "960",
//                 "width": "960",
//                 "mp4_size": "5419840",
//                 "mp4": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/giphy-hd.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-hd.mp4&ct=g"
//             },
//             "480w_still": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "31994522",
//                 "url": "https://media2.giphy.com/media/5tw4zQVwKT5OwTTdry/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPTV0dzR6UVZ3S1Q1T3dUVGRyeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV0dzR6UVZ3S1Q1T3dUVGRyeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV0dzR6UVZ3S1Q1T3dUVGRyeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV0dzR6UVZ3S1Q1T3dUVGRyeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "Xev2JdopBxGj1LuGvt",
//         "url": "https://giphy.com/gifs/cute-hi-bulldog-Xev2JdopBxGj1LuGvt",
//         "slug": "cute-hi-bulldog-Xev2JdopBxGj1LuGvt",
//         "bitly_gif_url": "https://gph.is/g/Z817J14",
//         "bitly_url": "https://gph.is/g/Z817J14",
//         "embed_url": "https://giphy.com/embed/Xev2JdopBxGj1LuGvt",
//         "username": "",
//         "source": "https://giphy.com/explore/blue-the-bulldog",
//         "title": "Puppy Wave Hi GIF by MOODMAN",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "giphy.com",
//         "source_post_url": "https://giphy.com/explore/blue-the-bulldog",
//         "is_sticker": 0,
//         "import_datetime": "2019-05-02 23:06:30",
//         "trending_datetime": "2021-03-27 01:15:15",
//         "images": {
//             "original": {
//                 "height": "320",
//                 "width": "320",
//                 "size": "2889212",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "1600728",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "1024672",
//                 "webp": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "108",
//                 "hash": "bbe9b7a2c50deb4f3bcebd7f5765de37"
//             },
//             "downsized": {
//                 "height": "320",
//                 "width": "320",
//                 "size": "1148873",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy-downsized.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "320",
//                 "width": "320",
//                 "size": "2889212",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "320",
//                 "width": "320",
//                 "size": "2889212",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "150",
//                 "width": "150",
//                 "mp4_size": "78897",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "320",
//                 "width": "320",
//                 "size": "24857",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy-downsized_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "1615927",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "273361",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "424392",
//                 "webp": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "99065",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "65070",
//                 "webp": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "501595",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "87107",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "144258",
//                 "webp": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "5674",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "16687",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "1615927",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "273361",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "424392",
//                 "webp": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "99065",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "65070",
//                 "webp": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "501595",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "48699",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "144258",
//                 "webp": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "5674",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "16687",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "4896296",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "320",
//                 "width": "320",
//                 "size": "39269",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "480",
//                 "width": "480",
//                 "mp4_size": "1600728",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "176",
//                 "width": "176",
//                 "mp4_size": "37572",
//                 "mp4": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "66",
//                 "width": "66",
//                 "size": "49828",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "118",
//                 "width": "118",
//                 "size": "37582",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "480w_still": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "2889212",
//                 "url": "https://media1.giphy.com/media/Xev2JdopBxGj1LuGvt/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPVhldjJKZG9wQnhHajFMdUd2dCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVhldjJKZG9wQnhHajFMdUd2dCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVhldjJKZG9wQnhHajFMdUd2dCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVhldjJKZG9wQnhHajFMdUd2dCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "jUcETcDU7LuzeJCqyn",
//         "url": "https://giphy.com/gifs/justviralnet-funny-mood-animal-jUcETcDU7LuzeJCqyn",
//         "slug": "justviralnet-funny-mood-animal-jUcETcDU7LuzeJCqyn",
//         "bitly_gif_url": "https://gph.is/g/aNMG9Gd",
//         "bitly_url": "https://gph.is/g/aNMG9Gd",
//         "embed_url": "https://giphy.com/embed/jUcETcDU7LuzeJCqyn",
//         "username": "justviralnet",
//         "source": "https://viralapk.com/26-try-not-to-laugh-funny-animal-pictures-with-captions-of-the-day/",
//         "title": "Dog Sleeping GIF by JustViral",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "viralapk.com",
//         "source_post_url": "https://viralapk.com/26-try-not-to-laugh-funny-animal-pictures-with-captions-of-the-day/",
//         "is_sticker": 0,
//         "import_datetime": "2019-11-16 02:38:03",
//         "trending_datetime": "2021-06-29 03:45:09",
//         "images": {
//             "original": {
//                 "height": "480",
//                 "width": "384",
//                 "size": "11530123",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "1452317",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "3580692",
//                 "webp": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "134",
//                 "hash": "d63313b0fe348431cd02b022a6cd6e02"
//             },
//             "downsized": {
//                 "height": "297",
//                 "width": "238",
//                 "size": "1402221",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-downsized.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "480",
//                 "width": "384",
//                 "size": "7958648",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-downsized-large.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-large.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "480",
//                 "width": "384",
//                 "size": "4064603",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-downsized-medium.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-medium.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "192",
//                 "width": "153",
//                 "mp4_size": "147836",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "297",
//                 "width": "238",
//                 "size": "22685",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-downsized_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "160",
//                 "size": "1820330",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "405570",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "1010452",
//                 "webp": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "160",
//                 "size": "88874",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "55040",
//                 "webp": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "80",
//                 "size": "565086",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "111007",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "307088",
//                 "webp": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "80",
//                 "size": "5244",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "160",
//                 "size": "16736",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "250",
//                 "width": "200",
//                 "size": "2717682",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "634448",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "1496716",
//                 "webp": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "250",
//                 "width": "200",
//                 "size": "132168",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "83628",
//                 "webp": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "125",
//                 "width": "100",
//                 "size": "821522",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "46561",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "457628",
//                 "webp": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "125",
//                 "width": "100",
//                 "size": "7965",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "250",
//                 "width": "200",
//                 "size": "23394",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "2163282",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "480",
//                 "width": "384",
//                 "size": "82764",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "480",
//                 "width": "384",
//                 "mp4_size": "1452317",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "312",
//                 "width": "249",
//                 "mp4_size": "39649",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "83",
//                 "width": "66",
//                 "size": "49508",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "146",
//                 "width": "116",
//                 "size": "41440",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "hd": {
//                 "height": "720",
//                 "width": "576",
//                 "mp4_size": "2461580",
//                 "mp4": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/giphy-hd.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-hd.mp4&ct=g"
//             },
//             "480w_still": {
//                 "height": "600",
//                 "width": "480",
//                 "size": "11530123",
//                 "url": "https://media1.giphy.com/media/jUcETcDU7LuzeJCqyn/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "user": {
//             "avatar_url": "https://media3.giphy.com/avatars/justviralnet/YrLI9PNklC7O.png",
//             "banner_image": "https://media3.giphy.com/headers/justviralnet/YIfCTjGdO4C3.jpg",
//             "banner_url": "https://media3.giphy.com/headers/justviralnet/YIfCTjGdO4C3.jpg",
//             "profile_url": "https://giphy.com/justviralnet/",
//             "username": "justviralnet",
//             "display_name": "JustViral",
//             "description": "Trending Technology World",
//             "instagram_url": "",
//             "website_url": "https://trendywebz.com/",
//             "is_verified": false
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPWpVY0VUY0RVN0x1emVKQ3F5biZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWpVY0VUY0RVN0x1emVKQ3F5biZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWpVY0VUY0RVN0x1emVKQ3F5biZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWpVY0VUY0RVN0x1emVKQ3F5biZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWExMWJhOGNmZWowN2t2YWdrNWh5eGQ1eDd1ZHcxYjBvbnU4YTUzNDkybmppNWYxMSZjdD1n&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "ZsqVl7DeLvQQw",
//         "url": "https://giphy.com/gifs/husky-belly-rub-ZsqVl7DeLvQQw",
//         "slug": "husky-belly-rub-ZsqVl7DeLvQQw",
//         "bitly_gif_url": "http://gph.is/2mpQHfy",
//         "bitly_url": "http://gph.is/2mpQHfy",
//         "embed_url": "https://giphy.com/embed/ZsqVl7DeLvQQw",
//         "username": "",
//         "source": "https://www.reddit.com/r/Eyebleach/comments/5xmzsx/husky_belly_rub/",
//         "title": "Dog Puppy GIF",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "www.reddit.com",
//         "source_post_url": "https://www.reddit.com/r/Eyebleach/comments/5xmzsx/husky_belly_rub/",
//         "is_sticker": 0,
//         "import_datetime": "2017-03-05 15:23:15",
//         "trending_datetime": "0000-00-00 00:00:00",
//         "images": {
//             "original": {
//                 "height": "720",
//                 "width": "720",
//                 "size": "16748932",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "675081",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "27298936",
//                 "webp": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "172",
//                 "hash": "6cfde56dc2640c87d346e53d1df0e740"
//             },
//             "downsized": {
//                 "height": "249",
//                 "width": "250",
//                 "size": "889008",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-downsized.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "576",
//                 "width": "576",
//                 "size": "6375197",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-downsized-large.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-large.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "519",
//                 "width": "519",
//                 "size": "4857839",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-downsized-medium.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-medium.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "220",
//                 "width": "220",
//                 "mp4_size": "171187",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "249",
//                 "width": "250",
//                 "size": "23391",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-downsized_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "1272101",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "165018",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "2322250",
//                 "webp": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "76567",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "91110",
//                 "webp": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "355603",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "59744",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "753212",
//                 "webp": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "4242",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "13043",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "1272101",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "165018",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "2322250",
//                 "webp": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "76567",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "91110",
//                 "webp": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "355603",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "46749",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "753212",
//                 "webp": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "100",
//                 "width": "100",
//                 "size": "4242",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "200",
//                 "width": "200",
//                 "size": "13043",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "1991761",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "720",
//                 "width": "720",
//                 "size": "177545",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "480",
//                 "width": "480",
//                 "mp4_size": "675081",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "150",
//                 "width": "150",
//                 "mp4_size": "34278",
//                 "mp4": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "126",
//                 "width": "126",
//                 "size": "48410",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "126",
//                 "width": "126",
//                 "size": "48054",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "480w_still": {
//                 "height": "480",
//                 "width": "480",
//                 "size": "16748932",
//                 "url": "https://media3.giphy.com/media/ZsqVl7DeLvQQw/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPVpzcVZsN0RlTHZRUXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpzcVZsN0RlTHZRUXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpzcVZsN0RlTHZRUXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVpzcVZsN0RlTHZRUXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=SENT"
//             }
//         }
//     },
//     {
//         "type": "gif",
//         "id": "73h3LBWraONTW",
//         "url": "https://giphy.com/gifs/get-couch-cant-73h3LBWraONTW",
//         "slug": "get-couch-cant-73h3LBWraONTW",
//         "bitly_gif_url": "http://gph.is/2oYs6Rl",
//         "bitly_url": "http://gph.is/2oYs6Rl",
//         "embed_url": "https://giphy.com/embed/73h3LBWraONTW",
//         "username": "",
//         "source": "https://www.reddit.com/r/gifs/comments/65029a/puppy_cant_get_on_the_couch/",
//         "title": "Dog Oops GIF",
//         "rating": "g",
//         "content_url": "",
//         "source_tld": "www.reddit.com",
//         "source_post_url": "https://www.reddit.com/r/gifs/comments/65029a/puppy_cant_get_on_the_couch/",
//         "is_sticker": 0,
//         "import_datetime": "2017-04-12 18:37:50",
//         "trending_datetime": "2020-02-24 12:45:08",
//         "images": {
//             "original": {
//                 "height": "258",
//                 "width": "480",
//                 "size": "8064881",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.gif&ct=g",
//                 "mp4_size": "643275",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g",
//                 "webp_size": "1241084",
//                 "webp": "https://media4.giphy.com/media/73h3LBWraONTW/giphy.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.webp&ct=g",
//                 "frames": "143",
//                 "hash": "5e13e209e886cb8cf2a7963fb6176eb9"
//             },
//             "downsized": {
//                 "height": "134",
//                 "width": "250",
//                 "size": "1448392",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-downsized.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized.gif&ct=g"
//             },
//             "downsized_large": {
//                 "height": "258",
//                 "width": "480",
//                 "size": "5898557",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-downsized-large.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-large.gif&ct=g"
//             },
//             "downsized_medium": {
//                 "height": "206",
//                 "width": "384",
//                 "size": "4036297",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-downsized-medium.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-medium.gif&ct=g"
//             },
//             "downsized_small": {
//                 "height": "142",
//                 "width": "264",
//                 "mp4_size": "72628",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-downsized-small.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized-small.mp4&ct=g"
//             },
//             "downsized_still": {
//                 "height": "134",
//                 "width": "250",
//                 "size": "26326",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-downsized_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-downsized_s.gif&ct=g"
//             },
//             "fixed_height": {
//                 "height": "200",
//                 "width": "372",
//                 "size": "5699651",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/200.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.gif&ct=g",
//                 "mp4_size": "292106",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/200.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.mp4&ct=g",
//                 "webp_size": "853076",
//                 "webp": "https://media4.giphy.com/media/73h3LBWraONTW/200.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200.webp&ct=g"
//             },
//             "fixed_height_downsampled": {
//                 "height": "200",
//                 "width": "372",
//                 "size": "294600",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/200_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.gif&ct=g",
//                 "webp_size": "43260",
//                 "webp": "https://media4.giphy.com/media/73h3LBWraONTW/200_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_d.webp&ct=g"
//             },
//             "fixed_height_small": {
//                 "height": "100",
//                 "width": "186",
//                 "size": "1676527",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/100.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.gif&ct=g",
//                 "mp4_size": "91228",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/100.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.mp4&ct=g",
//                 "webp_size": "332380",
//                 "webp": "https://media4.giphy.com/media/73h3LBWraONTW/100.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100.webp&ct=g"
//             },
//             "fixed_height_small_still": {
//                 "height": "100",
//                 "width": "186",
//                 "size": "13020",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/100_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100_s.gif&ct=g"
//             },
//             "fixed_height_still": {
//                 "height": "200",
//                 "width": "372",
//                 "size": "43406",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/200_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200_s.gif&ct=g"
//             },
//             "fixed_width": {
//                 "height": "108",
//                 "width": "200",
//                 "size": "1858836",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/200w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.gif&ct=g",
//                 "mp4_size": "97503",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/200w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.mp4&ct=g",
//                 "webp_size": "358314",
//                 "webp": "https://media4.giphy.com/media/73h3LBWraONTW/200w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w.webp&ct=g"
//             },
//             "fixed_width_downsampled": {
//                 "height": "108",
//                 "width": "200",
//                 "size": "94977",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/200w_d.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.gif&ct=g",
//                 "webp_size": "18138",
//                 "webp": "https://media4.giphy.com/media/73h3LBWraONTW/200w_d.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_d.webp&ct=g"
//             },
//             "fixed_width_small": {
//                 "height": "54",
//                 "width": "100",
//                 "size": "596317",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/100w.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.gif&ct=g",
//                 "mp4_size": "39550",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/100w.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.mp4&ct=g",
//                 "webp_size": "145494",
//                 "webp": "https://media4.giphy.com/media/73h3LBWraONTW/100w.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w.webp&ct=g"
//             },
//             "fixed_width_small_still": {
//                 "height": "54",
//                 "width": "100",
//                 "size": "4850",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/100w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=100w_s.gif&ct=g"
//             },
//             "fixed_width_still": {
//                 "height": "108",
//                 "width": "200",
//                 "size": "14427",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/200w_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=200w_s.gif&ct=g"
//             },
//             "looping": {
//                 "mp4_size": "2233865",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-loop.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-loop.mp4&ct=g"
//             },
//             "original_still": {
//                 "height": "258",
//                 "width": "480",
//                 "size": "66955",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy_s.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy_s.gif&ct=g"
//             },
//             "original_mp4": {
//                 "height": "258",
//                 "width": "480",
//                 "mp4_size": "643275",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/giphy.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy.mp4&ct=g"
//             },
//             "preview": {
//                 "height": "184",
//                 "width": "344",
//                 "mp4_size": "22382",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-preview.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.mp4&ct=g"
//             },
//             "preview_gif": {
//                 "height": "63",
//                 "width": "117",
//                 "size": "48227",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-preview.gif?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.gif&ct=g"
//             },
//             "preview_webp": {
//                 "height": "163",
//                 "width": "303",
//                 "size": "48408",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-preview.webp?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-preview.webp&ct=g"
//             },
//             "hd": {
//                 "height": "430",
//                 "width": "800",
//                 "mp4_size": "1006974",
//                 "mp4": "https://media4.giphy.com/media/73h3LBWraONTW/giphy-hd.mp4?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=giphy-hd.mp4&ct=g"
//             },
//             "480w_still": {
//                 "height": "258",
//                 "width": "480",
//                 "size": "8064881",
//                 "url": "https://media4.giphy.com/media/73h3LBWraONTW/480w_s.jpg?cid=a11ba8cfej07kvagk5hyxd5x7udw1b0onu8a53492nji5f11&rid=480w_s.jpg&ct=g"
//             }
//         },
//         "analytics_response_payload": "e=Z2lmX2lkPTczaDNMQldyYU9OVFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw",
//         "analytics": {
//             "onload": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTczaDNMQldyYU9OVFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=SEEN"
//             },
//             "onclick": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTczaDNMQldyYU9OVFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=CLICK"
//             },
//             "onsent": {
//                 "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTczaDNMQldyYU9OVFcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hMTFiYThjZmVqMDdrdmFnazVoeXhkNXg3dWR3MWIwb251OGE1MzQ5Mm5qaTVmMTEmY3Q9Zw&action_type=SENT"
//             }
//         }
//     }
// ]