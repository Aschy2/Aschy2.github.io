
// Today I went to the zoo. I saw a(n)
// _______adj_1____(adjective)
// ______noun_1_______(Noun) jumping up and down in its tree.
// He ______verb_1_______(verb, past tense) ____adverb_1______(adverb)
// through the large tunnel that led to its ___adj_2____(adjective)
// _____noun_2_____(noun). I got some peanuts and passed
// them through the cage to a gigantic gray ___noun_3____(noun)
// towering above my head. Feeding that animal made
// me hungry. I went to get a _____adj_3_____(adjective) scoop
// of ice cream. It filled my stomach. Afterwards I had to
// ____verb_2______(verb) ____adverb_2______ (adverb) to catch our bus.
// When I got home I _____verb_3_____(verb, past tense) my
// mom for a __________(adjective) day at the zoo.


// Today, my fabulous camp group went to a (an)
// _____adj1_______ (adjective) amusement park. It was a
// fun park with lots of cool _____noun1_______ (plural noun)
// and enjoyable play structures. When we got there, my
// kind counselor shouted loudly, "Everybody off the
// _____noun2_______ (noun)." We all pushed out in a terrible
// hurry. My counselor handed out yellow tickets, and
// we scurried in. I was so excited! I couldn't figure out
// what exciting thing to do first. I saw a scary roller
// coaster I really liked so, I _____adverb1_______ (adverb) ran
// over to get in the long line that had about
// _____number1_______ (number) people in it. When I finally
// got on the roller coaster I was ______verb1______ (past
// tense verb). In fact I was so nervous my two knees
// were knocking together. This was the ____adj2________
// (-est adjective) ride I had ever been on! In about two
// minutes I heard the crank and grinding of the gears.
// That’s when the ride began! When I got to the bottom,
// I was a little _____verb2_______ (past tense verb) but I
// was proud of myself. The rest of the day went
// ______adverb1______ (adverb). It was a(n) ____adj3________
// (adjective) day at the fun park.

function chooseMadLib() {
    choice = document.getElementById('choice-text').value;
    choice = choice.toLowerCase();
    if (choice == "zoo story") {
      document.getElementById('choose-mad-lib').style.display = "none";
      document.getElementById('ZooMadLib').style.display = "block";
      document.getElementById('reset-container').style.display = "block";
    } else if (choice == "amusement park story") {
        document.getElementById('choose-mad-lib').style.display = "none";
        document.getElementById('NewMadLib').style.display = "block";
        document.getElementById('reset-container').style.display = "block";
    } else {
      alert("Please enter a valid Mad Lib Name, from the list provided in the text field!")
    }
}

function resetMadLib() {

  if (choice == "zoo story") {
    document.getElementById('input').style.display = "inline";
    document.getElementById('label').style.display = "inline";
    document.getElementById('submit').style.display = "inline";
    document.getElementById('input').value = "adjective";
    document.getElementById('label').innerHTML = "Please enter an adjective:";
    document.getElementById('madlib').innerHTML = "You're story will replace this text when you complete it.";
    adj_1 = noun_1 = verb_1 = adverb_1 = adj_2 = noun_2 = noun_3 = adj_3 = verb_2 = adverb_2 = verb_3 = adj_4 = undefined;
  } else if (choice == "amusement park story") {
    document.getElementById('input2').style.display = "inline";
    document.getElementById('label2').style.display = "inline";
    document.getElementById('submit2').style.display = "inline";
    document.getElementById('input2').value = "adjective";
    document.getElementById('label2').innerHTML = "Please enter an adjective:";
    document.getElementById('madlib2').innerHTML = "You're story will replace this text when you complete it.";
    adj1 = noun1 = noun2 = adverb1 = number1 = verb1 = adj2 = verb2 = adverb2 = adj3 = undefined;
  }
}

function returnMadLib() {
  document.getElementById('input2').value = "adjective";
  document.getElementById('label2').innerHTML = "Please enter an adjective:";
  document.getElementById('madlib2').innerHTML = "You're story will replace this text when you complete it.";
  document.getElementById('input').value = "adjective";
  document.getElementById('label').innerHTML = "Please enter an adjective:";
  document.getElementById('madlib').innerHTML = "You're story will replace this text when you complete it.";
  document.getElementById('choice-text').value = "";
  document.getElementById('choose-mad-lib').style.display = "block";
  document.getElementById('ZooMadLib').style.display = "none";
  document.getElementById('NewMadLib').style.display = "none";
  document.getElementById('reset-container').style.display = "none";
}

function functionSubmit2() {

  if (adj1 == undefined) {
    adj1 = document.getElementById('input2').value;
    document.getElementById('input2').value = "plural noun";
    document.getElementById('label2').innerHTML = "Please enter a plural noun:";
    console.log(adj1);
  } else if (noun1 == undefined) {
    noun1 = document.getElementById('input2').value;
    document.getElementById('input2').value = "noun";
    document.getElementById('label2').innerHTML = "Please enter a noun:";
    console.log(noun1);
  } else if (noun2 == undefined) {
    noun2 = document.getElementById('input2').value;
    document.getElementById('input2').value = "adverb";
    document.getElementById('label2').innerHTML = "Please enter an adverb:";
    console.log(noun2);
  } else if (adverb1 == undefined) {
    adverb1 = document.getElementById('input2').value;
    document.getElementById('input2').value = "number";
    document.getElementById('label2').innerHTML = "Please enter a number:";
    console.log(adverb1);
  } else if (number1 == undefined) {
    number1 = document.getElementById('input2').value;
    document.getElementById('input2').value = "past tense verb";
    document.getElementById('label2').innerHTML = "Please enter a verb that is past tense";
    console.log(number1);
  } else if (verb1 == undefined) {
    verb1 = document.getElementById('input2').value;
    document.getElementById('input2').value = "-est adjective";
    document.getElementById('label2').innerHTML = "Please enter an adjective that ends in \"est\":";
    console.log(verb1);
  } else if (adj2 == undefined) {
    adj2 = document.getElementById('input2').value;
    document.getElementById('input2').value = "past tense verb";
    document.getElementById('label2').innerHTML = "Please enter a verb that is past tense";
    console.log(adj2);
  } else if (verb2 == undefined) {
    verb2 = document.getElementById('input2').value;
    document.getElementById('input2').value = "adverb";
    document.getElementById('label2').innerHTML = "Please enter a adverb:";
    console.log(verb2);
  } else if (adverb2 == undefined) {
    adverb2 = document.getElementById('input2').value;
    document.getElementById('input2').value = "adjective";
    document.getElementById('label2').innerHTML = "Please enter an adjective:";
    console.log(adverb2);
  } else if (adj3 == undefined) {
    adj3 = document.getElementById('input2').value;
    document.getElementById('input2').style.display = "none";
    document.getElementById('label2').style.display = "none";
    document.getElementById('submit2').style.display = "none";
    console.log(adj_4);
    document.getElementById('madlib2').innerHTML = "Today, my fabulous camp group went to a (an) " + adj1 + " amusement park. " +
    "It was a fun park with lots of cool " + noun1 + " and enjoyable play structures. " +
    "When we got there, my kind counselor shouted loudly, \"Everybody off the " + noun2 +  ".\" We all pushed out in a terrible hurry. " +
    "My counselor handed out yellow tickets, and we scurried in. I was so excited! " +
    "I couldn't figure out what exciting thing to do first. " +
    "I saw a scary roller coaster I really liked so, I " + adverb1 + " ran over to get in the long line that had about " + number1 + " people in it. " +
    "When I finally got on the roller coaster I was " + verb1 + ". " +
    "In fact I was so nervous my two knees were knocking together. " +
    "This was the " + adj2 + " ride I had ever been on! " +
    "In about two minutes I heard the crank and grinding of the gears. " +
    "That’s when the ride began! When I got to the bottom, I was a little " + verb2 + " but I was proud of myself. " +
    "The rest of the day went " + adverb2 + ". " +
    "It was a(n) " + adj3 + " day at the fun park.";
  }
}

function functionSubmit() {

  if (adj_1 == undefined) {
    adj_1 = document.getElementById('input').value;
    document.getElementById('input').value = "noun";
    document.getElementById('label').innerHTML = "Please enter a noun:";
    console.log(adj_1);
  } else if (noun_1 == undefined) {
    noun_1 = document.getElementById('input').value;
    document.getElementById('input').value = "verb, past tense";
    document.getElementById('label').innerHTML = "Please enter a verb thats past tense:";
    console.log(noun_1);
  } else if (verb_1 == undefined) {
    verb_1 = document.getElementById('input').value;
    document.getElementById('input').value = "adverb";
    document.getElementById('label').innerHTML = "Please enter an adverb:";
    console.log(verb_1);
  } else if (adverb_1 == undefined) {
    adverb_1 = document.getElementById('input').value;
    document.getElementById('input').value = "adjective";
    document.getElementById('label').innerHTML = "Please enter an adjective:";
    console.log(adverb_1);
  } else if (adj_2 == undefined) {
    adj_2 = document.getElementById('input').value;
    document.getElementById('input').value = "noun";
    document.getElementById('label').innerHTML = "Please enter a noun:";
    console.log(adj_2);
  } else if (noun_2 == undefined) {
    noun_2 = document.getElementById('input').value;
    document.getElementById('input').value = "another noun";
    document.getElementById('label').innerHTML = "Please enter another noun:";
    console.log(noun_2);
  } else if (noun_3 == undefined) {
    noun_3 = document.getElementById('input').value;
    document.getElementById('input').value = "adjective";
    document.getElementById('label').innerHTML = "Please enter an adjective:";
    console.log(noun_3);
  } else if (adj_3 == undefined) {
    adj_3 = document.getElementById('input').value;
    document.getElementById('input').value = "verb";
    document.getElementById('label').innerHTML = "Please enter a verb:";
    console.log(adj_3);
  } else if (verb_2 == undefined) {
    verb_2 = document.getElementById('input').value;
    document.getElementById('input').value = "adverb";
    document.getElementById('label').innerHTML = "Please enter a adverb:";
    console.log(verb_2);
  } else if (adverb_2 == undefined) {
    adverb_2 = document.getElementById('input').value;
    document.getElementById('input').value = "verb, past tense";
    document.getElementById('label').innerHTML = "Please enter a verb thats past tense:";
    console.log(adverb_2);
  } else if (verb_3 == undefined) {
    verb_3 = document.getElementById('input').value;
    document.getElementById('input').value = "adjective";
    document.getElementById('label').innerHTML = "Please enter an adjective:";
    console.log(verb_3);
  } else if (adj_4 == undefined) {
    adj_4 = document.getElementById('input').value;
    document.getElementById('input').style.display = "none";
    document.getElementById('label').style.display = "none";
    document.getElementById('submit').style.display = "none";
    console.log(adj_4);
    document.getElementById('madlib').innerHTML = "Today I went to the zoo. I saw a(n) " + adj_1 + " " + noun_1 +
    " jumping up and down in its tree. He " + verb_1 + " " + adverb_1 + " through the large tunnel that led to its " +
    adj_2 + " " + noun_2 + ". I got some peanuts and passed them through the cage to a gigantic gray " + noun_3 +
    " towering above my head. Feeding that animal made me hungry. I went to get a " + adj_3 +
    " scoop of ice cream. It filled my stomach. Afterwards I had to " + verb_2 + " " + adverb_2 +
    " to catch our bus. When I got home I " + verb_3 + " my mom for a " + adj_4 + " day at the zoo.";
  }
}
