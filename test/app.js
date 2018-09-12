console.log($);

const $mainlinkEls = $('.mainlink a')
const mainLinkElsArr = $mainlinkEls.toArray()

console.log(mainLinkElsArr);

const titlesList = mainLinkElsArr
  .map( domEl => {
      // domEl.textContent
      return $(domEl).text()
  })

console.log(titlesList);
