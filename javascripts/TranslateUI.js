let translations;

//v1
let TranslateUI_v1 = {
    find(lang = "en", special = null) {
        fetch("./languages/"+lang+".json").then(response => response.json()).then((json) => {
            translations = json;

            if(special !== null){
                $(special).each(function(){
                    TranslateUI_v1.translate(this);
                });
            }

            $(".translate").each(function(){
                TranslateUI_v1.translate(this);
            });
        });
    },
    translate(item){
        if(typeof(translations) !== 'undefined' || translations !== null) {

            for (let trans in translations) {
                if(trans === $(item).text()) {
                    return $(item).text(translations[trans]);
                }
            }
        }
    }
};

//v2
class TranslateUI_v2 {
    //Find translations by language and special
    find = async (lang = "en", special = null) => {
        let me = this;
        fetch("./languages/"+lang+".json").then(response => response.json()).then((json) => {
            translations = json;

            if(special !== null){
                $(special).each(function(){
                    me.translate(this);
                });
            }

            $(".translate").each(function(){
                me.translate(this);
            });
        });
    };

    //Translate
    translate = async (item) => {
        if(typeof(translations) !== 'undefined' || translations !== null) {

            for (let trans in translations) {
                if(trans === $(item).text()) {
                    return $(item).text(translations[trans]);
                }
            }
        }
    }
}

//v3
function find(lang, special){
    $.getJSON("./languages/"+lang+".json", function(json){
        translations = json;

        if(typeof(special) !== "undefined" || special !== null){
            $(special).each(function(){
                translate(this);
            });
        }

        $(".translate").each(function(){
            translate(this);
        });
    });
}

function translate(item){
    if(typeof(translations) !== 'undefined' || translations !== null) {

        for (let trans in translations) {
            if(trans === $(item).text()) {
                return $(item).text(translations[trans]);
            }
        }
    }
}
