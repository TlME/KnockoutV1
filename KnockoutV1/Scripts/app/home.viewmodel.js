function HomeViewModel(app, dataModel) {
    var self = this;
    // text converter
    // replacment function definition
    function replacer(text) {
        // dictionary of searched and replaced terms
        var conversionTable = {
            "you": "thou",
            "your": "thy",
            "yours": "thine",
            "the ": "ye ",
            "does": "doth",
            "that": "yonder",
            "then": "hence",
            "they": "thee",
            "what": "wot",
            "in": "een",
            "of": "ken",
            "good": "sely",
            "since": "sith",
            "same": "thilke",
            "not": "ne",
            "from": "fro",
            "also": "eek",
            "little": "lite",
            "may": "mowe",
            "many": "micel",
            "old": "auld",
            "name": "highte",
            "cool": "gentilesse",
            "random": "hap",
            "every": "everich",
            " if ": " yif ",
            "will": "wol",
            "dude": "cuckold",
            " my ": " mine ",
        }
        //Creates a RegEx based on above dictionary
        var outText = text;
        for (var key in conversionTable){
            if (!conversionTable.hasOwnProperty(key)){
                continue;
            }
            outText = outText.replace(new RegExp(key, "g"), conversionTable[key]);
        }
        return outText;
    }
    // Defining inputText & calculating outputText
    self.inputText = ko.observable("Your Text Here");
    self.outputText = ko.computed(function () {
        return replacer(self.inputText());
    }, self);
   
    

    //Sammy(function () {
    //    this.get('#home', function () {
    //        // Make a call to the protected Web API by passing in a Bearer Authorization Header
    //        $.ajax({
    //            method: 'get',
    //            url: app.dataModel.userInfoUrl,
    //            contentType: "application/json; charset=utf-8",
    //            headers: {
    //                'Authorization': 'Bearer ' + app.dataModel.getAccessToken()
    //            },
    //            success: function (data) {
    //                self.myHometown('Your Hometown is not : ' + data.hometown);
    //            }
    //        });
    //    });
    //    this.get('/', function () { this.app.runRoute('get', '#home') });
    //});

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});
