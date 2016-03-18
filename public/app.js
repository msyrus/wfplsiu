var queries = [{
  id: 0,
  text: "What f#&king programming language should I use?",
  subhead: "Your foul-mouthed technical advisor",
  disclaimer: "* This guide is very much tounge in cheek, I would not recommend referencing it in a technical review.",
  answers: [{
    text: "Let's roll!",
    target: 1
  }]
}, {
  id: 1,
  text: "Have you already established a language for your project or team?",
  answers: [{
    text: "Yes",
    target: 2
  }, {
    text: "No",
    target: 3
  }]
}, {
  id: 2,
  text: "Keep using that fucking language. Unless you can't accomplish your goals with your current language, you're setting back progress by starting with a new language.",
  answers: []
}, {
  id: 3,
  text: "Are you building a mobile app?",
  answers: [{
    text: "Yes",
    target: 4
  }, {
    text: "No",
    target: 8
  }]
}, {
  id: 4,
  text: "Are you building for Android, iOS, or both?",
  answers: [{
    text: "Android",
    target: 5
  }, {
    text: "iOS",
    target: 6
  }, {
    text: "Both",
    target: 7
  }]
}, {
  id: 5,
  text: "Looks like you're using fucking Java. Hybrid apps suck.",
  answers: []
}, {
  id: 6,
  text: "Use fucking Swift. Hybrid apps suck.",
  answers: []
}, {
  id: 7,
  text: "Time to learn fucking Java and Swift. Hybrid apps suck, so your dumb ass needs to learn both.",
  answers: []
}, {
  id: 8,
  text: "What the fuck are you building?",
  answers: [{
    text: "Web app",
    target: 9
  }, {
    text: "Networked application",
    target: 11
  }, {
    text: "Desktop app",
    target: 21
  }]
}, {
  id: 9,
  text: "Is it a client-side app?",
  answers: [{
    text: "Yes",
    target: 10
  }, {
    text: "No",
    target: 11
  }]
}, {
  id: 10,
  text: "Looks like you're stuck with fucking JavaScript you poor bastard.",
  answers: []
}, {
  id: 11,
  text: "Are you working for an established enterprise or a startup?",
  answers: [{
    text: "Enterprise",
    target: 12
  }, {
    text: "Startup",
    target: 13
  }]
}, {
  id: 12,
  text: "Just use fucking Java. No one ever got fired for choosing Java.",
  answers: []
}, {
  id: 13,
  text: "Do you give a shit about concurrency?",
  answers: [{
    text: "Yes",
    target: 14
  }, {
    text: "No",
    target: 25
  }]
}, {
  id: 14,
  text: "Do you know why you give a shit about concurrency?",
  answers: [{
    text: "Yes",
    target: 16
  }, {
    text: "Not really",
    target: 15
  }]
}, {
  id: 15,
  text: "I didn't think so you asshole. Just use Ruby - probably with Rails - and get the fuck out of my office.",
  answers: []
}, {
  id: 16,
  text: "Are you into functional programming?",
  answers: [{
    text: "Yes",
    target: 18
  }, {
    text: "No",
    target: 17
  }]
}, {
  id: 17,
  text: "Use fucking Go.",
  answers: []
}, {
  id: 18,
  text: "Do you need to use the Java Virtual Machine for some fucking reason?",
  answers: [{
    text: "Yes",
    target: 19
  }, {
    text: "No",
    target: 20
  }]
}, {
  id: 19,
  text: "Use fucking Clojure",
  answers: []
}, {
  id: 20,
  text: "Use fucking Rust or Elixir. I've got you this far, choose whichever one doesn't look like shit to you.",
  answers: []
}, {
  id: 21,
  text: "How fucking lazy are you?",
  answers: [{
    text: "Really lazy",
    target: 22
  }, {
    text: "Sort of lazy",
    target: 23
  }, {
    text: "I'll sleep when I die",
    target: 24
  }]
}, {
  id: 22,
  text: "Damn it. Just use fucking Visual Basic. I hope you're proud of yourself.",
  answers: []
}, {
  id: 23,
  text: "Just use fucking Java.",
  answers: []
}, {
  id: 24,
  text: "Do it properly in some fucking dialect of C",
  answers: []
}, {
  id: 25,
  text: "Do you need static types?",
  answers: [{
    text: "Yes",
    target: 26
  }, {
    text: "No",
    target: 27
  }]
}, {
  id: 26,
  text: "Use fucking Dart",
  answers: []
}, {
  id: 27,
  text: "Do you want only one language in your codebase?",
  answers: [{
    text: "Yes",
    target: 28
  }, {
    text: "I don't care",
    target: 29
  }]
}, {
  id: 28,
  text: "You're stuck with fucking JavaScript, but you already knew that",
  answers: []
}, {
  id: 29,
  text: "Are you already familiar with at least one programming language?",
  answers: [{
    text: "Yes",
    target: 30
  }, {
    text: "No",
    target: 31
  }]
}, {
  id: 30,
  text: "Are you nostalgic for the web of the early 2000s?",
  answers: [{
    text: "Yes",
    target: 32
  }, {
    text: "No",
    target: 33
  }]
}, {
  id: 31,
  text: "Use fucking Python. It's easy to learn and very powerful.",
  answers: []
}, {
  id: 32,
  text: "You should probably stick with fucking PHP",
  answers: []
}, {
  id: 33,
  text: "Use fucking Ruby",
  answers: []
}];

var queriesSFW = [{
  id: 0,
  text: "What programming language should I use? SFW Edition.",
  subhead: "Your (not so) foul-mouthed technical advisor",
  disclaimer: "* This guide is very much tounge in cheek, I would not recommend referencing it in a technical review.",
  answers: [{
    text: "Let's roll!",
    target: 1
  }]
}, {
  id: 1,
  text: "Have you already established a language for your project or team?",
  answers: [{
    text: "Yes",
    target: 2
  }, {
    text: "No",
    target: 3
  }]
}, {
  id: 2,
  text: "Keep using that language. Unless you can't accomplish your goals with your current language, you're setting back progress by starting with a new language.",
  answers: []
}, {
  id: 3,
  text: "Are you building a mobile app?",
  answers: [{
    text: "Yes",
    target: 4
  }, {
    text: "No",
    target: 8
  }]
}, {
  id: 4,
  text: "Are you building for Android, iOS, or both?",
  answers: [{
    text: "Android",
    target: 5
  }, {
    text: "iOS",
    target: 6
  }, {
    text: "Both",
    target: 7
  }]
}, {
  id: 5,
  text: "Looks like you're using Java. Hybrid apps just aren't all they're made out to be.",
  answers: []
}, {
  id: 6,
  text: "Use Swift. Hybrid apps just aren't all they're made out to be.",
  answers: []
}, {
  id: 7,
  text: "Time to learn both Java and Swift. Hybrid apps typically aren't great, so you'll need to learn both.",
  answers: []
}, {
  id: 8,
  text: "What are you building?",
  answers: [{
    text: "Web app",
    target: 9
  }, {
    text: "Networked application",
    target: 11
  }, {
    text: "Desktop app",
    target: 21
  }]
}, {
  id: 9,
  text: "Is it a client-side app?",
  answers: [{
    text: "Yes",
    target: 10
  }, {
    text: "No",
    target: 11
  }]
}, {
  id: 10,
  text: "Looks like you're stuck with JavaScript. My apologies.",
  answers: []
}, {
  id: 11,
  text: "Are you working for an established enterprise or a startup?",
  answers: [{
    text: "Enterprise",
    target: 12
  }, {
    text: "Startup",
    target: 13
  }]
}, {
  id: 12,
  text: "Just use Java. No one ever got fired for choosing Java.",
  answers: []
}, {
  id: 13,
  text: "Do you care about concurrency?",
  answers: [{
    text: "Yes",
    target: 14
  }, {
    text: "No",
    target: 25
  }]
}, {
  id: 14,
  text: "Do you know why you care about concurrency?",
  answers: [{
    text: "Yes",
    target: 16
  }, {
    text: "Not really",
    target: 15
  }]
}, {
  id: 15,
  text: "I didn't think so. Just use Ruby - probably with Rails - and get out of my office.",
  answers: []
}, {
  id: 16,
  text: "Are you into functional programming?",
  answers: [{
    text: "Yes",
    target: 18
  }, {
    text: "No",
    target: 17
  }]
}, {
  id: 17,
  text: "Use Go. It's pretty great.",
  answers: []
}, {
  id: 18,
  text: "Do you need to use the Java Virtual Machine for some reason?",
  answers: [{
    text: "Yes",
    target: 19
  }, {
    text: "No",
    target: 20
  }]
}, {
  id: 19,
  text: "Use Clojure",
  answers: []
}, {
  id: 20,
  text: "Use Rust or Elixir. I've got you this far, choose whichever one offends you the least.",
  answers: []
}, {
  id: 21,
  text: "How lazy are you?",
  answers: [{
    text: "Really lazy",
    target: 22
  }, {
    text: "Sort of lazy",
    target: 23
  }, {
    text: "I'll sleep when I die",
    target: 24
  }]
}, {
  id: 22,
  text: "Just use Visual Basic. I hope you're proud of yourself.",
  answers: []
}, {
  id: 23,
  text: "Just use Java",
  answers: []
}, {
  id: 24,
  text: "Do it properly in some dialect of C",
  answers: []
}, {
  id: 25,
  text: "Do you need static types?",
  answers: [{
    text: "Yes",
    target: 26
  }, {
    text: "No",
    target: 27
  }]
}, {
  id: 26,
  text: "Use Dart",
  answers: []
}, {
  id: 27,
  text: "Do you want only one language in your codebase?",
  answers: [{
    text: "Yes",
    target: 28
  }, {
    text: "I don't care",
    target: 29
  }]
}, {
  id: 28,
  text: "You're stuck with JavaScript, but you already knew that",
  answers: []
}, {
  id: 29,
  text: "Are you already familiar with at least one programming language?",
  answers: [{
    text: "Yes",
    target: 30
  }, {
    text: "No",
    target: 31
  }]
}, {
  id: 30,
  text: "Are you nostalgic for the web of the early 2000s?",
  answers: [{
    text: "Yes",
    target: 32
  }, {
    text: "No",
    target: 33
  }]
}, {
  id: 31,
  text: "Use Python. It's easy to learn and very powerful.",
  answers: []
}, {
  id: 32,
  text: "You should probably stick with PHP",
  answers: []
}, {
  id: 33,
  text: "Use Ruby",
  answers: []
}];


function QueryViewModel() {
  var self = this;

  self.querySet = ko.observable();
  self.currentStep = ko.observable();
  self.queryData = ko.observable();
  self.sfw = ko.observable();

  // Operations
  self.goToTarget = function(obj) {
    self.currentStep(obj.target);
    self.queryData(self.querySet()[obj.target]);
  }

  self.startOver = function() {
    self.goToTarget({target: 0});
  }

  self.toggleSFW = function() {
    self.sfw(!self.sfw());
    if (self.sfw()) {
      self.querySet(queriesSFW);
      self.queryData(self.querySet()[self.currentStep()]);
    } else {
      self.querySet(queries);
      self.queryData(self.querySet()[self.currentStep()]);
    }
  }

  self.sfw(false);
  self.querySet(queries);
  self.goToTarget({target: 0});
}

ko.applyBindings(new QueryViewModel());
