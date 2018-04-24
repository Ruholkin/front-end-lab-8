var model = {
    currentPerson: {},
    allPersons: [
      {
        name: 'Lily Butler',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Waller Perry',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Tammi Donovan',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
      },
      {
        name: 'Doreen Flowers',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
      },
      {
        name: 'Price Pace',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
      },
      {
        name: 'Larson Maldonado',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
      },
      {
        name: 'Berg Bolton',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Mack Lott',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
      },
      {
        name: 'Rosanna Mcleod',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
      },
      {
        name: 'Rosalie Rice',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
      },
      {
        name: 'Virginia Buchanan',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
      },
      {
        name: 'Lorna Stein',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
      },
      {
        name: 'Rosalie Steele',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
      },
      {
        name: 'Wilcox Boyd',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
      },
      {
        name: 'Ollie Rice',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
      }
    ]
};

var control = {
    init: function(){
      listView.init();
      listView.render();
      scoresView.init();
      scoresView.render();
      profileView.init();
    },
    getAllNames: function(){
      let names = [];
      names = model.allPersons.map( elem => elem.name);
      return names;
    },
    getAllScores: function(){
      let scores = [];
      scores = model.allPersons.map( elem => elem.score);
      return scores;
    },
    setCurrentPerson: function(index){
      model.currentPerson = model.allPersons[index];
    },
    getCurrentPerson: function(){
      return model.currentPerson;
    },
    viewCurrentProfile: function(){
      profileView.init();
      profileView.render(this.getCurrentPerson());
    },
    setCurrentPersonScore: function(value){
      model.currentPerson.score = value;
    }
};

var listView = {
    init: function(){
      this.$namesView = $(".names");
      this.names = control.getAllNames();
      this.handleClicks();
    },
    render: function(){
      let personsNames = control.getAllScores();
      for( let i = 0; i < this.names.length; i++ ){
        let $item = $("<li></li>");
        $item.text(this.names[i]);
        $item.attr("id", i);
        this.$namesView.append($item);
      }
    },
    handleClicks: function(){
      this.$namesView.click( () => {
        let test = event.target.id;
        control.setCurrentPerson(test);
        profileView.render();
      });
    }
};


var scoresView = {
    init: function(){
      this.$scoresView = $(".scores");
      this.scores = control.getAllScores();
    },
    render: function(){
      let personsScores = control.getAllScores();
      for( let i = 0; i < this.scores.length; i++ ){
        let $item = $("<li></li>");
        $item.text(this.scores[i]);
        $item.attr("id", i);
        this.$scoresView.append($item);
      }
    },
    handleClicks: function(){
      this.$scoresView.click( () => {

      });
    }
};


var profileView = {
    init: function(){
      this.$profileView = $(".profile");
    },
    render: function(person){
      let currentPerson = control.getCurrentPerson();

      let name = currentPerson.name;
      let photoUrl = currentPerson.photoUrl;
      let score = currentPerson.score;

      let $img = $("<img></img>");
      let $name = $("<h3></h3>");
      let $score = $("<p></p>");

      $img.attr("src", photoUrl);
      $name.text(name);
      $score.text(score);

      this.$profileView.append($img);
      this.$profileView.append($name);
      this.$profileView.append($score);
    }
};

control.init();