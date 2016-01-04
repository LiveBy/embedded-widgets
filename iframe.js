'use strict'

/**
 * Script to be placed in the head of the client site.
 * The Hotjar tracker will provide heatmap data.
 * After DOM load, this script will generate an iframe at the embedded hook (<div class="liveBy-container"></div>)
 */

// Hotjar Snippet HERE for heatmap.


document.addEventListener('DOMContentLoaded', function (event) {
  var attributes = {
    width: '100%',
    height: '100%',
    style: "border: 'none'",
    scrolling: 'no'
  }

  var liveBy = document.querySelector('liveBy-container')

  var iframe = document.createElement('iframe')
  iframe.src = 'https://www.liveby.co/neighborhood-finder'

  Object.keys(attributes).forEach(function (item, idx, arr) {
    iframe.setAttribute(item, attributes[item])
  })

  liveBy.appendChild(iframe)
})
