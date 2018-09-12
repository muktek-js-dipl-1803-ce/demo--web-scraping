const cheerio = require('cheerio')

const request = require('superagent')

const delayFunction = function(delayTime){
  console.log('....... waiting ........')
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve(true)
    }, delayTime)
  })
}

const getTitles = async (theIssueNum, issuesObj)=>{

  console.log('Fetching ISSUE: ' + theIssueNum );
  const serverRes = await request.get(`https://javascriptweekly.com/issues/${theIssueNum}`)
  const htmlFileText = serverRes.text

  const $ = cheerio.load(htmlFileText)

  const $titleEls = $('.mainlink a')

  const titleElsArr = $titleEls.toArray()

  const titleStrings = titleElsArr
      .map( el => {
        return $(el).text()
      })

  issuesObj[theIssueNum] = titleStrings
  theIssueNum -= 1

  if( theIssueNum >= 395){
    await delayFunction(5000)
    await getTitles(theIssueNum, issuesObj )
  } else {
    console.log(issuesObj);
    return issuesObj
  }

}



getTitles(402, {})








//

// console.log(titleStrings);
