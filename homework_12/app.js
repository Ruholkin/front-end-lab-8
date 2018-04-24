const model = {
	currentPerson: {},
	allPersons: [
		{
			name: 'Lily Butler',
			score: 2,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
		}, {
			name: 'Waller Perry',
			score: 4,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
		}, {
			name: 'Tammi Donovan',
			score: 5,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
		}, {
			name: 'Doreen Flowers',
			score: 4,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
		}, {
			name: 'Price Pace',
			score: 2,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
		}, {
			name: 'Larson Maldonado',
			score: 1,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
		}, {
			name: 'Berg Bolton',
			score: 5,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
		}, {
			name: 'Mack Lott',
			score: 3,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
		}, {
			name: 'Rosanna Mcleod',
			score: 4,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
		}, {
			name: 'Rosalie Rice',
			score: 1,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
		}, {
			name: 'Virginia Buchanan',
			score: 2,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
		}, {
			name: 'Lorna Stein',
			score: 4,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
		}, {
			name: 'Rosalie Steele',
			score: 3,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
		}, {
			name: 'Wilcox Boyd',
			score: 5,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
		}, {
			name: 'Ollie Rice',
			score: 5,
			photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
		}
	]
};

const control = {
	init: function() {
		sortView.init();
		sortView.render();

		listView.init();
		listView.render();

		scoresView.init();
		scoresView.render();

		profileView.init();

	},
	getAllNames: function() {
		return model.allPersons.map(el=>el.name);
	},
	getAllScores: function() {
		return model.allPersons.map(el=>el.score);
	},
	setCurrentPerson: function(index) {
		model.currentPerson = model.allPersons[index];
		this.viewCurrentProfile();
	},
	getCurrentPerson: function() {
		return model.currentPerson;
	},
	viewCurrentProfile: function() {
		profileView.render();
	},
	setCurrentPersonScore: function(value) {
		model.currentPerson.score = value;
		profileView.render();
		scoresView.render();
	},
	sortAllPersons: function(foo) {
    model.allPersons.sort(foo);

    listView.init();
    listView.render();

    scoresView.init();
    scoresView.render();
  }
};

const listView = {
	init: function() {
		this.$container = $('.names');
		this.handleClicks();
	},
	render: function() {
		let template = control.getAllNames().reduce((acc, cur, i) => {
			return acc += `<li>${cur}</li>`;
		}, '');
		this.$container.html(template);
	},
	handleClicks: function() {
		this.$container.on('click','li', function(e) {
			let currentIndex = $(e.target).index();
			control.setCurrentPerson(currentIndex);
		});
	}
};

const scoresView = {
	init: function() {
		this.$container = $('.scores');
		this.handleClicks();
	},
	render: function() {
		let template = control.getAllScores().reduce((acc, cur) => {
			return acc += `
					<li>
							<span>${cur}</span>
							<input class="hidden score-input" type="text" value="${cur}">
					</li>
			`
		}, '');
		this.$container.html(template);
	},
	handleClicks: function() {
		this.$container.on('click', 'li', function(e) {
			let $currentLi = $(e.target);
			let $currentSpan = $currentLi.find('span');
			let $currentInput = $currentLi.find('input.score-input');
			let currentIndex = $currentLi.index();
				
				if (!$currentInput.is('.hidden')) {
					return false;
				}
			control.setCurrentPerson(currentIndex);
			$currentSpan.addClass('hidden');
			$currentInput.removeClass('hidden').focus();
		});
		this.$container.on('focusout .score-input', function(e) {
			let newScore = $(e.target).val();
			control.setCurrentPersonScore( Number(newScore) );

			$(".arrow-up").removeClass("arrow-up-active").removeClass("hidden");
			$(".arrow-down").removeClass("arrow-down-active").removeClass("hidden");
		});
	}
};

const profileView = {
	init: function() {
		this.$container = $('.profile');
	},
	render: function() {
		let currentPerson = control.getCurrentPerson();
		let template = `
				<img src="${currentPerson.photoUrl}">
				<h3>${currentPerson.name}</h3>
				<p>Score:${currentPerson.score}</p>
		`
		this.$container.html(template);
	}
};

const sortView = {
	init: function() {
		this.$sortView = $(".wrapper");
	},
	render: function() {

		let $nameArrowUp = $("<div></div>");
    $nameArrowUp.addClass("arrow-up");
    let $nameArrowDown = $("<div></div>");
    $nameArrowDown.addClass("arrow-down");

    let $scoreArrowUp = $("<div></div>");
    $scoreArrowUp.addClass("arrow-up");
    let $scoreArrowDown = $("<div></div>");
    $scoreArrowDown.addClass("arrow-down");

		let $sortDiv = $("<div></div>");
    $sortDiv.addClass("sort");

    let $sortName = $("<div></div>");
    let $p = $("<p></p>");
    $p.append(document.createTextNode("Name"));

    $sortName.addClass("sort-name").append($p).append($nameArrowUp).append($nameArrowDown);
    $p = $("<p></p>");
    $p.append(document.createTextNode("Score"));
    let $sortScore = $("<div></div>");
    $sortScore.addClass("sort-score").append($p).append($scoreArrowUp).append($scoreArrowDown);
    $sortDiv.append($sortName);
    $sortDiv.append($sortScore);

    $(this.$sortView).before($sortDiv);

    this.handleClicks();
	},
	handleClicks: function() {
		$(".sort-name .arrow-up").click( () => {
			control.sortAllPersons(sort_li_up);
			$(".sort-name .arrow-up").addClass("arrow-up-active");
			$(".sort-name .arrow-down").addClass("hidden");
		});
		$(".sort-name .arrow-down").click( () => {
			control.sortAllPersons(sort_li_down);
			$(".sort-name .arrow-down").addClass("arrow-down-active");
			$(".sort-name .arrow-up").addClass("hidden");
		});
		$(".sort-score .arrow-up").click( () => {
			control.sortAllPersons(sort_li_score_up);
			$(".sort-score .arrow-up").addClass("arrow-up-active");
			$(".sort-score .arrow-down").addClass("hidden");
		});
		$(".sort-score .arrow-down").click( () => {
			control.sortAllPersons(sort_li_score_down);
			$(".sort-score .arrow-down").addClass("arrow-down-active");
			$(".sort-score .arrow-up").addClass("hidden");
		});
		
	}
};

control.init();

function sort_li_up(a, b){
   return (b.name) < (a.name) ? 1 : -1;    
}

function sort_li_down(a, b){
   return (a.name) < (b.name) ? 1 : -1;    
}

function sort_li_score_up(a, b){
   return (b.score) < (a.score) ? 1 : -1;    
}

function sort_li_score_down(a, b){
   return (a.score) < (b.score) ? 1 : -1; 
}