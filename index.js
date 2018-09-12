const cheerio = require('cheerio')

const request = require('superagent')

request.get('https://javascriptweekly.com/issues/402')
  .then((serverRes)=>{
    const htmlFileText = serverRes.text

    const $ = cheerio.load(htmlFileText)

    const $titleEls = $('.mainlink a')

    const titleElsArr = $titleEls.toArray()

    const titleStrings = titleElsArr
        .map( el => {
          return $(el).text()
        })
    console.log(titleStrings);

  })








//

// console.log(titleStrings);
