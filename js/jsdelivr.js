var name = "yunwanjia-cloud";
var repository = "blog";
if(document.domain != 'localhost'){
	if(document.getElementById("post")){
		for (var key in document.getElementById("article-container").getElementsByTagName('img')){
  			if (isNaN(key)){
    			break;
  			}
    		document.getElementById("article-container").getElementsByTagName('img')[key].src = document.getElementById("article-container").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
		}
    }
}

var name = "yunwanjia-cloud";
var repository = "blog";
if(document.domain != 'localhost'){
    for (var key in document.getElementById("articleContent").getElementsByTagName('img')){
        if (isNaN(key)){
            break;
        }
    	document.getElementById("articleContent").getElementsByTagName('img')[key].src = document.getElementById("articleContent").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
    }
}

var name = "yunwanjia-cloud";
var repository = "blog";
if(document.domain != 'localhost'){
    if(document.getElementsByClassName("post-copyright")[0] || document.URL == "https://" + document.domain + '/'){
        for (var key in document.getElementsByClassName("card-content article")[0].getElementsByTagName('img')){
            if (isNaN(key)){
                break;
            }
        document.getElementsByClassName("card-content article")[0].getElementsByTagName('img')[key].src = document.getElementsByClassName("card-content article")[0].getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
        }
    }
}

var name = "yunwanjia-cloud";
var repository = "blog";
if(document.domain != 'localhost'){
    for (var key in document.getElementById("posts").getElementsByTagName('img')){
        if (isNaN(key)){
            break;
        }
        document.getElementById("posts").getElementsByTagName('img')[key].src = document.getElementById("posts").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
    }
}

var name = "yunwanjia-cloud";
var repository = "blog";
if(document.domain != 'localhost'){
    if(document.getElementById("post")){
        for (var key in document.getElementById("post").getElementsByTagName('img')){
            if (isNaN(key)){
                break;
            }
            document.getElementById("post").getElementsByTagName('img')[key].src = document.getElementById("post").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
        }
    }
    if(document.getElementsByClassName("post-list")[0]){
        for (var key in document.getElementsByClassName("post-list")[0].getElementsByTagName('img')){
            if (isNaN(key)){
                break;
            }
            document.getElementsByClassName("post-list")[0].getElementsByTagName('img')[key].src = document.getElementsByClassName("post-list")[0].getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
        }
    }
}