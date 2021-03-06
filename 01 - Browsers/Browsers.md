# Browsers

A crucial tool is the browser. Web developers rely on the browser to observe how their code runs on the web, it's also used to view visual elements of a web page that are written in the editor, like HTML.  
Many browsers come with *developer tools* (DevTools) that contain a set of helpful features and information to assist developers to collect and capture important insights about their application. For example: If a web page has errors, it's sometimes helpful to know when they occurred. DevTools in a browser can be configured to capture this information.   

The current landscape of browsers as of 2020 is that most of them are like Chrome because they use the same engine (Blink). This means that Microsoft Edge which is also based on Blink, and Safari, which is based on WebKit, a similar engine to Blink, are just worse versions of Chrome. Chrome is a reasonably good browser both in terms of performance and usability. Should you want an alternative, Firefox is our recommendation. It is comparable to Chrome in pretty much every regard and it excels for privacy reasons.
Another browser called [Flow](https://www.ekioh.com/flow-browser/) is not user ready yet, but it is implementing a new rendering engine that promises to be faster than the current ones. 

#### Check out those Tiny URLs Safely:  
To preview without accessing a Tiny URL, add preview to the front.  
```url
http://preview.<TinyURLs>/
```

### Browser Independent OnLoad Calls
```javascript
if (window.addEventListener) window.addEventListener("load", <YourOnloadFunction>, false);
else if (window.attachEvent) window.attachEvent("onload", <YourOnloadFunction>);
else window.onload = <YourOnloadFunction>;
```

### Popular Browsers and DevTools  
- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)   
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)  
- [Firefox](https://developer.mozilla.org/docs/Tools)  

#### Short Link?
Use 'Preview' with a short link and reduce your exposure:  
```html
http://preview.<tinyURL>/ (remove the extra space)
```

### Common Keyboard Shortcuts
Clicking around in your browser is often not the fastest option, getting familiar with common shortcuts can really pay off in the long run.
- `Middle Button Click` in a link opens it in a new tab
- `Ctrl+T` Opens a new tab
- `Ctrl+Shift+T` Reopens a recently closed tab
- `Ctrl+L` selects the contents of the search bar
- `Ctrl+F` to search within a webpage. If you do this often, you may benefit from an extension that supports regular expressions in searches.

### Console
The Console requires developer functions in your browser. If not available, enable Developer. 
```javascript
console.log("Greeting from the JavaScript!!!!");
```

### Functionality Customization
In the same way that you can modify the style, you can also modify the behaviour of a website by writing custom javascript and them sourcing it using a web browser extension such as [Tampermonkey](https://tampermonkey.net/)

For example the following script enables vim-like navigation using the J and K keys.

```js
// ==UserScript==
// @name         VIM HT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Vim JK for our website
// @author       You
// @match        https://hacker-tools.github.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (key == 74) { // J is key 74
            window.scrollBy(0,500);;
        }else if (key == 75) { // K is key 75
            window.scrollBy(0,-500);;
        }
    }
})();
```

There are also script repositories such as [OpenUserJS](https://openuserjs.org/) and [Greasy Fork](https://greasyfork.org/en). However, be warned, installing user scripts from others can be very dangerous since they can pretty much do anything such as steal your credit card numbers. Never install a script unless you read the whole thing yourself, understand what it does, and are absolutely sure that you know it isn't doing anything suspicious. Never install a script that contains minified or obfuscated code that you can't read!

### Privacy extensions
Nowadays surfing the web can get quite annoying due to ads and invasive due to trackers. Moreover a good adblocker not only blocks most ad content but it will also block sketchy and malicious websites since they will be included in the common blacklists. They will also reduce page load times sometimes by reducing the amount of requests performed. A couple of recommendations are:

- **uBlock origin** ([Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)): block ads and trackers based on predefined rules. You should also consider taking a look at the enabled blacklists in settings since you can enable more based on your region or browsing habits. You can even install filters from [around the web](https://github.com/gorhill/uBlock/wiki/Filter-lists-from-around-the-web)

- **[Privacy Badger](https://privacybadger.org/)**: detects and blocks trackers automatically. For example when you go from website to website ad companies track which sites you visit and build a profile of you

- **[HTTPS everywhere](https://www.eff.org/https-everywhere)** is a wonderful extension that redirects to HTTPS version of a website automatically, if available.

You can find about more addons of this kind [here](https://www.privacytools.io/#browser-addons)

### Search operators
Web search engines like Google or DuckDuckGo provide search operators to enable more elaborate web searches:

- `"bar foo"` enforces an exact match of bar foo
- `foo site:bar.com` searches for foo within bar.com
- `foo -bar ` excludes the terms containing bar from the search
- `foobar filetype:pdf` Searches for files of that extension
- `(foo|bar)` searches for matches that have foo OR bar

More through lists are available for popular engines like
- [Google](https://ahrefs.com/blog/google-advanced-search-operators/)
- [DuckDuckGo](https://duck.co/help/results/syntax)

### Searchbar
The searchbar is a powerful tool too. Most browsers can infer search engines from websites and will store them. By editing the keyword argument

- In Google Chrome they are in [chrome://settings/searchEngines](chrome://settings/searchEngines)
- In Firefox they are in [about:preferences#search](about:preferences#search)

For example you can make so that `y SOME SEARCH TERMS` to directly search in youtube.

Moreover, if you own a domain you can setup subdomain forwards using your registrar. For instance I have mapped `https://ht.josejg.com` to this course website. That way I can just type `ht.` and the searchbar will autocomplete. Another good feature of this setup is that unlike bookmarks they will work in every browser.

#### Style customization
Web browsers are just another piece of software running in _your machine_ and thus you usually have the last say about what they should display or how they should behave. An example of this are custom styles. Browsers determine how to render the style of a  webpage using Cascading Style Sheets often abbreviated as CSS.

You can access the source code of a website by inspecting it and changing its contents and styles temporarily (this is also a reason why you should never trust webpage screenshots).

If you want to permanently tell your browser to override the style settings for a webpage you will need to use an extension. Our recommendation is **[Stylus](https://github.com/openstyles/stylus)** ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en)).

For example, we can write the following style for the class website

```css

body {
    background-color: #2d2d2d;
    color: #eee;
    font-family: Fira Code;
    font-size: 16pt;
}

a:link {
    text-decoration: none;
    color: #0a0;
}
```

Moreover, Stylus can find styles written by other users and published in [userstyles.org](https://userstyles.org/). Most common websites have one or several dark theme stylesheets for instance. FYI, you should not use Stylish since it was shown to leak user data, more [here](https://arstechnica.com/information-technology/2018/07/stylish-extension-with-2m-downloads-banished-for-tracking-every-site-visit/)

### Web APIs
It has become more and more common for webservices to offer an application interface aka web API so you can interact with the services making web requests.
A more in depth introduction to the topic can be found [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction). There are [many public APIs](https://github.com/toddmotto/public-apis). Web APIs can be useful for very many reasons:

- **Retrieval**. Web APIs can quite easily provide you information such as maps, weather or what your public ip address. For instance `curl ipinfo.io` will return a JSON object with some details about your public ip, region, location, &c. With proper parsing these tools can be integrated even with command line tools. The following bash functions talks to Googles autocompletion API and returns the first ten matches.

```bash
function c() {
    url='https://www.google.com/complete/search?client=hp&hl=en&xhr=t'
    # NB: user-agent must be specified to get back UTF-8 data!
    curl -H 'user-agent: Mozilla/5.0' -sSG --data-urlencode "q=$*" "$url" |
        jq -r ".[1][][0]" |
        sed 's,</\?b>,,g'
}
```

- **Interaction**. Web API endpoints can also be used to trigger actions. These usually require some sort of authentication token that you can obtain through the service. For example performing the following
`curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' "https://hooks.slack.com/services/$SLACK_TOKEN"` will send a `Hello, World!` message in a channel.

- **Piping**. Since some services with web APIs are rather popular, common web API "gluing" has already been implemented and is provided with server included. This is the case for services like [If This Then That](https://ifttt.com/) and [Zapier](https://zapier.com/)

#### Plug-Ins
- [uBlock Origin](https://github.com/gorhill/uBlock) - It is a [wide-spectrum](https://github.com/gorhill/uBlock/wiki/Blocking-mode) blocker that doesn???t just stop ads, but all sorts of third-party communication a page may try to do. This also covers inline scripts and other types of resource loading. If you???re willing to spend some time on configuration to make things work, go to [medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode) or even [hard mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-hard-mode). Those will make some sites not work until you???ve fiddled with the settings enough, but will also significantly improve your online security. Otherwise, the [easy mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-easy-mode) is already a good default that blocks most ads and tracking. You can also define your own rules about what website objects to block.
- [Stylus](https://github.com/openstyles/stylus/) - a fork of Stylish (don't use Stylish, it was shown to [steal users' browsing history](https://www.theregister.co.uk/2018/07/05/browsers_pull_stylish_but_invasive_browser_extension/)), allows you to sideload custom CSS stylesheets to websites. With Stylus you can easily customize and modify the appearance of websites. This can be removing a sidebar, changing the background color or even the text size or font choice. This is fantastic for making websites that you visit frequently more readable. Moreover, Stylus can find styles written by other users and published in [userstyles.org](https://userstyles.org/). Most common websites have one or several dark theme stylesheets for instance. 
- Full Page Screen Capture - [Built into Firefox](https://screenshots.firefox.com/) and [Chrome extension](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl?hl=en). Lets you take a screenshot of a full website, often much better than printing for reference purposes.
- [Multi Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) - lets you separate cookies into "containers", allowing you to browse the web with different identities and/or ensuring that websites are unable to share information between them.
- Password Manager Integration - Most password managers have browser extensions that make inputting your credentials into websites not only more convenient but also more secure. Compared to simply copy-pasting your user and password, these tools will first check that the website domain matches the one listed for the entry, preventing phishing attacks that impersonate popular websites to steal credentials. 
- [Vimium](https://github.com/philc/vimium) - A browser extension that provides keyboard-based navigation and control of the web in the spirit of the Vim editor.

#### Web Automation

Sometimes web APIs are not enough. If only reading is needed you can use a html parser like `pup` or use a library, for example python has BeautifulSoup. However if interactivity or javascript execution is required those solutions fall short. WebDriver

For example, the following script will save the specified url using the wayback machine simulating the interaction of typing the website.

```python
from selenium.webdriver import Firefox
from selenium.webdriver.common.keys import Keys

def snapshot_wayback(driver, url):

    driver.get("https://web.archive.org/")
    elem = driver.find_element_by_class_name('web-save-url-input')
    elem.clear()
    elem.send_keys(url)
    elem.send_keys(Keys.RETURN)
    driver.close()

driver = Firefox()
url = 'https://hacker-tools.github.io'
snapshot_wayback(driver, url)
```

