(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

/**
 * Script to be placed in the head of the client site.
 * The Hotjar tracker will provide heatmap data.
 * After DOM load, this script will generate an iframe at the embedded hook (<div class="liveBy-container"></div>)
 */

//hotjar and ga tracking codes

(function(h,o,t,j,a,r){
		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		h._hjSettings={hjid:106041,hjsv:5};
		a=o.getElementsByTagName('head')[0];
		r=o.createElement('script');r.async=1;
		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		a.appendChild(r);
	})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-71267055-3', 'auto');
	ga('send', 'pageview');



// iframe generation

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9pZnJhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFNjcmlwdCB0byBiZSBwbGFjZWQgaW4gdGhlIGhlYWQgb2YgdGhlIGNsaWVudCBzaXRlLlxuICogVGhlIEhvdGphciB0cmFja2VyIHdpbGwgcHJvdmlkZSBoZWF0bWFwIGRhdGEuXG4gKiBBZnRlciBET00gbG9hZCwgdGhpcyBzY3JpcHQgd2lsbCBnZW5lcmF0ZSBhbiBpZnJhbWUgYXQgdGhlIGVtYmVkZGVkIGhvb2sgKDxkaXYgY2xhc3M9XCJsaXZlQnktY29udGFpbmVyXCI+PC9kaXY+KVxuICovXG5cbi8vaG90amFyIGFuZCBnYSB0cmFja2luZyBjb2Rlc1xuXG4oZnVuY3Rpb24oaCxvLHQsaixhLHIpe1xuXHRcdGguaGo9aC5oanx8ZnVuY3Rpb24oKXsoaC5oai5xPWguaGoucXx8W10pLnB1c2goYXJndW1lbnRzKX07XG5cdFx0aC5faGpTZXR0aW5ncz17aGppZDoxMDYwNDEsaGpzdjo1fTtcblx0XHRhPW8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblx0XHRyPW8uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7ci5hc3luYz0xO1xuXHRcdHIuc3JjPXQraC5faGpTZXR0aW5ncy5oamlkK2oraC5faGpTZXR0aW5ncy5oanN2O1xuXHRcdGEuYXBwZW5kQ2hpbGQocik7XG5cdH0pKHdpbmRvdyxkb2N1bWVudCwnLy9zdGF0aWMuaG90amFyLmNvbS9jL2hvdGphci0nLCcuanM/c3Y9Jyk7XG4oZnVuY3Rpb24oaSxzLG8sZyxyLGEsbSl7aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J109cjtpW3JdPWlbcl18fGZ1bmN0aW9uKCl7XG5cdChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuXHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTtcblx0XG5cdGdhKCdjcmVhdGUnLCAnVUEtNzEyNjcwNTUtMycsICdhdXRvJyk7XG5cdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG5cblxuXG4vLyBpZnJhbWUgZ2VuZXJhdGlvblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgc3R5bGU6IFwiYm9yZGVyOiAnbm9uZSdcIixcbiAgICBzY3JvbGxpbmc6ICdubydcbiAgfVxuXG4gIHZhciBsaXZlQnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaXZlQnktY29udGFpbmVyJylcblxuICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgaWZyYW1lLnNyYyA9ICdodHRwczovL3d3dy5saXZlYnkuY28vbmVpZ2hib3Job29kLWZpbmRlcidcblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpZHgsIGFycikge1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoaXRlbSwgYXR0cmlidXRlc1tpdGVtXSlcbiAgfSlcblxuICBsaXZlQnkuYXBwZW5kQ2hpbGQoaWZyYW1lKVxufSlcbiJdfQ==
