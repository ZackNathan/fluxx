var Card = function(name) {
    this.name = name;
};
Card.prototype.actionAtTurnStart = function(){};
Card.prototype.actionAtGoalChange = function(){};
Card.prototype.actionAtCardPlayed = function(){};
Card.prototype.actionAtCardDrawn = function(){};


function Keeper(name) {
    Card.call(this, name)
};
Keeper.prototype = Object.create(Card.prototype);
Keeper.prototype.constructor = Keeper;
Keeper.prototype.actionAtCardPlayed = function(){
    //Add card to keeper pile on the table
};

//List of keepers
var brain = new Keeper("The Brain");
var chocolate = new Keeper("Chocolate");
var cookies = new Keeper("Cookies");
var cosmos = new Keeper("The Cosmos");
var dreams = new Keeper("Dreams");
var love = new Keeper("Love");
var milk = new Keeper("Milk");
var money = new Keeper("Money");
var moon = new Keeper("The Moon");
var peace = new Keeper("Peace");
var rocket = new Keeper("Rocket");
var sleep = new Keeper("Sleep");
var sun = new Keeper("The Sun");
var television = new Keeper("Television");
var time = new Keeper("Time");
var toaster = new Keeper("The Toaster");
var eye = new Keeper("The Eye");
var party = new Keeper("The Party");
var internet = new Keeper("The Internet");
var cheese = new Keeper("Cheese");
var forest = new Keeper("The Forest");
var fireworks = new Keeper("Fireworks")
var spoon = new Keeper("The Spoon");
var surgery = new Keeper("Surgery");
var music = new Keeper("Music");
var coffee = new Keeper("Coffee");



function Creeper(name) {
    Card.call(this, name)
};
Creeper.prototype = Object.create(Card.prototype);
Creeper.prototype.constructor = Creeper;
Creeper.prototype.actionAtCardDrawn = function(){
    //Add card to creeper pile on table, and draw a replacement card
};

//List of creepers

var war = new Creeper("War");
var death = new Creeper("Death");
death.actionAtTurnStart = function(){
    //Choose a keeper to discard
};
var taxes = new Creeper("Taxes");
taxes.actionAtTurnStart = function(){
    //If you also have money, discard both
};
var radioactivePotato = new Creeper("Radioactive Potato");
radioactivePotato.actionAtGoalChange = function(){
    //Cycle around the table in the counter turn direction
};
var pollution = new Creeper("Pollution");
pollution.actionAtTurnStart = function(){
    //Choose a card in your hand to discard
};
var nightmares = new Creeper("Nightmares")
nightmares.actionAtTurnStart = function(){
    //If you also have sleep or dreams, discard both
};




function Goal(name) {
    Card.call(this, name)
};
Goal.prototype = Object.create(Card.prototype);
Goal.prototype.constructor = Goal;
Goal.prototype.condition = function(){};
Goal.prototype.actionAtCardPlayed = function(){
    //Change the active goal to this card
};

//List of goals

var tenInHand = new Goal("10 Cards in Hand");
tenInHand.condition = function(){
    //Has 10 or more cards in hand
};
var fiveKeepers = new Goal("5 Keepers");
fiveKeepers.condition = function(){
    //Has 5 or more keepers on the table
};
var allYouNeedIsLove = new Goal("All You Need is Love")
allYouNeedIsLove.condition = function(){
    //Has love on the table, and no other keepers
};
var bakedGoods = new Goal("Baked Goods")
bakedGoods.condition = function(){
    //Has bread and cookies
};
var bedTime = new Goal("Bed Time")
bedTime.condition = function(){
    //Has sleep and time
};
var brainNoTV = new Goal("The Brain (no TV)")
brainNoTV.condition = function(){
    //Has the brain, and the television is not on the table
};
var chocolateCookies = new Goal("Chocolate Cookies")
chocolateCookies.condition = function(){
    //Has chocolate and cookies
};
var chocolateMilk = new Goal("Chocolate Milk")
chocolateMilk.condition = function(){
    //Has chocolate and milk
};
var deathByChocolate = new Goal("Death by Chocolate")
deathByChocolate.condition = function(){
    //Has chocolate and death
};
var dreamland = new Goal("Dreamland")
dreamland.condition = function(){
    //Has dreams and nightmares
};
var sweetDreams = new Goal("Sweet Dreams")
sweetDreams.condition = function(){
    //Has dreams and sleep
};
var heartsAndMinds = new Goal("Hearts and Minds")
heartsAndMinds.condition = function(){
    //Has love and the brain
};
var hippyism = new Goal("Hippyism")
hippyism.condition = function(){
    //Has peace and love
};
var milkAndCookies = new Goal("Milk and Cookies")
milkAndCookies.condition = function(){
    //Has milk and cookies
};
var nightAndDay = new Goal("Night and Day")
nightAndDay.condition = function(){
    //Has sun and moon
};
var peaceNoWar = new Goal("Peace (no War)")
peaceNoWar.condition = function(){
    //Has peace, and war is not on the table
};
var rocketScience = new Goal("Rocket Surgery")
rocketScience.condition = function(){
    //Has rocket and surgery
};
var rocketToTheMoon = new Goal("Rocket to the Moon")
rocketToTheMoon.condition = function(){
    //Has rocket and the moon
};
var squishyChocolate = new Goal("Squishy Chocolate")
squishyChocolate.condition = function(){
    //Has chocolate and the sun
};
var timeIsMoney = new Goal("Time is Money")
timeIsMoney.condition = function(){
    //Has time and money
};
var toast = new Goal("Toast")
toast.condition = function(){
    //Has bread and the toaster
};
var warDeath = new Goal("War = Death")
warDeath.condition = function(){
    //Has war and death
};
var lottery = new Goal("Winning the Lottery")
lottery.condition = function(){
    //Has dreams and money
};
var mindsEye = new Goal("Mind's Eye")
mindsEye.condition = function(){
    //Has the brain and the eye
};
var allThatIsCertain = new Goal("All That is Certain")
allThatIsCertain.condition = function(){
    //Has death and taxes
};
var interstellarSpacecraft = new Goal("Interstellar Spacecraft")
interstellarSpacecraft.condition = function(){
    //Has rocket and the cosmos
};
var starGazing = new Goal("Star Gazing")
starGazing.condition = function(){
    //Has the eye and cosmos
};
var partySnacks = new Goal("Party Snacks")
partySnacks.condition = function(){
    //Has the party, and one of bread, cookies, or chocolate
};
var pornography = new Goal("Pornography")
pornography.condition = function(){
    //Has love and the internet
};
var dairy = new Goal("Dairy Products")
dairy.condition = function(){
    //Has milk and cheese
};
var celestialCheddar = new Goal("Celestial Cheddar")
celestialCheddar.condition = function(){
    //Has the moon and cheese
};
var piracy = new Goal("Piracy")
piracy.condition = function(){
    //Has music and the internet
};
var cabinInTheWoods = new Goal("Cabin in the Woods")
cabinInTheWoods.condition = function(){
    //Has death and forest
};
var werewolves = new Goal("Werewolves")
werewolves.condition = function(){
    //Has the forest and the moon
};
var letsCelebrate = new Goal("Let's Celebrate!")
letsCelebrate.condition = function(){
    //Has fireworks and the party
};
var pyromaniac = new Goal("Pyromaniac")
pyromaniac.condition = function(){
    //Has the rocket and fireworks
};
var iNeedCereal = new Goal("I Need Cereal")
iNeedCereal.condition = function(){
    //Has milk and the spoon
};
var electrocution = new Goal("Electrocution")
electrocution.condition = function(){
    //Has toaster and the spoon
};
var badHospital = new Goal("Bad Hospital")
badHospital.condition = function(){
    //Has the spoon and surgery
};
var anesthetics = new Goal("Anesthetics")
anesthetics.condition = function(){
    //Has sleep and surgery
};
var concert = new Goal("Concert")
concert.condition = function(){
    //Has music and the party
};
var beverages = new Goal("Beverages")
beverages.condition = function(){
    //Has milk and coffee
};
var hotChocolate = new Goal("Hot Chocolate")
coffee.condition = function(){
    //Has coffee and chocolate
};





function NewRule(name) {
    Card.call(this, name)
};
NewRule.prototype = Object.create(Card.prototype);
NewRule.prototype.constructor = NewRule;
NewRule.prototype.rule = function(){};
NewRule.prototype.actionAtCardPlayed = function(){
    //Add this rule to the set of active rules
};

//List of new rules

var draw2 = new NewRule("Draw 2")
draw2.rule = function(){
    //Change base draw amount to 2
};
var draw3 = new NewRule("Draw 3")
draw3.rule = function(){
    //Change base draw amount to 3
};
var draw4 = new NewRule("Draw 4")
draw4.rule = function(){
    //Change base draw amount to 4
};
var draw5 = new NewRule("Draw 5")
draw5.rule = function(){
    //Change base draw amount to 5
};
var play2 = new NewRule("Play 2")
play2.rule = function(){
    //Change base play amount to 2
};
var play3 = new NewRule("Play 3")
play3.rule = function(){
    //Change base play amount to 3
};
var play4 = new NewRule("Play 4")
play4.rule = function(){
    //Change base play amount to 4
};
var playAll = new NewRule("Play All")
playAll.rule = function(){
    //Change base play amount to all
};
var handLimit0 = new NewRule("Hand Limit 0")
handLimit0.rule = function(){
    //Limits the hand size to 0
};
var handLimit1 = new NewRule("Hand Limit 1")
handLimit1.rule = function(){
    //Limits the hand size to 1
};
var handLimit2 = new NewRule("Hand Limit 2")
handLimit2.rule = function(){
    //Limits the hand size to 2
};
var keeperLimit2 = new NewRule("Keeper Limit 2")
keeperLimit2.rule = function(){
    //Limits the number of keepers to 2
};
var keeperLimit3 = new NewRule("Keeper Limit 3")
keeperLimit3.rule = function(){
    //Limits the number of keepers to 3
};
var keeperLimit4 = new NewRule("Keeper Limit 4")
keeperLimit4.rule = function(){
    //Limits the number of keepers to 4
};
var doubleAgenda = new NewRule("Double Agenda")
doubleAgenda.rule = function(){
    //Two goals are on the table at the same time
};
var firstPlayRandom = new NewRule("First Play Random")
firstPlayRandom.rule = function(){
    //If multiple cards are played, the first is randomly chosen
};
var noHandBonus = new NewRule("No Hand Bonus")
noHandBonus.rule = function(){
    //Draw 3 extra cards if there are no cards in the hand
};
var poorbonus = new NewRule("Poor Bonus")
poorbonus.rule = function(){
    //The player with the least keepers draws an extra card
};
var richBonus = new NewRule("Rich Bonus")
richBonus.rule = function(){
    //The player with the most keepers plays an extra card
};
var inflation = new NewRule("Inflation")
inflation.rule = function(){
    //For all cards with numerals, the value increases by one
};
var partyBonus = new NewRule("Party Bonus")
partyBonus.rule = function(){
    //Draw and play an extra card if party is on the table
};
var getOnWithIt = new NewRule("Get On With It!")
getOnWithIt.rule = function(){
    //At any time, a player may end their turn and draw 3 cards
};
var silverLining = new NewRule("Silver Lining")
silverLining.rule = function(){
    //Creepers do not prevent winning
};
var youAlsoNeedABakedPotato = new NewRule("You Also Need A Baked Potato")
youAlsoNeedABakedPotato.rule = function(){
    //Radioactive Potato is required to win
};
var lastCardRandom = new NewRule("Last Card Random")
youAlsoNeedABakedPotato.rule = function(){
    //If multiple cards are played, the last is randomly chosen
};
var secretTable = new NewRule("Secret Table")
secretTable.rule = function(){
    //All keepers and creepers on the table are turned upside down, to be hidden
};
var cardTax = new NewRule("Card Tax")
secretTable.rule = function(){
    //If taxes is on the table, draw and play amounts decrease by 1
};



function Action(name) {
    Card.call(this, name)
};
Action.prototype = Object.create(Card.prototype);
Action.prototype.constructor = Action;

//List of actions

var jackpot = new Action("Jackpot!")
jackpot.actionAtCardPlayed = function(){
    //Draw 3 extra cards
};
var discardAndDraw = new Action("Discard and Draw")
discardAndDraw.actionAtCardPlayed = function(){
    //Discard your entire hand and draw the same amount
};
var draw2AndUseEm = new Action("Draw 2 and Use 'em'")
draw2AndUseEm.actionAtCardPlayed = function(){
    //Draw 2 cards and play both
};
var draw3Play2OfThem = new Action("Draw 3, Play 2 of Them")
draw3Play2OfThem.actionAtCardPlayed = function(){
    //Draw 3 cards and play 2 of them
};
var everybodyGets1 = new Action("Everybody Gets 1")
everybodyGets1.actionAtCardPlayed = function(){
    //The player draws a player for every card and deals them out
};
var exchangeKeepers = new Action("Exchange Keepers")
exchangeKeepers.actionAtCardPlayed = function(){
    //Trade one of your keepers for another player's
};
var letsDoThatAgain = new Action("Let's Do That Again")
letsDoThatAgain.actionAtCardPlayed = function(){
    //Pick any action or new rule card from the discard pile and use it
};
var letsSimplify = new Action("Let's Simplify")
letsSimplify.actionAtCardPlayed = function(){
    //Discard up to half of the new rule cards
};
var noLimits = new Action("No Limits")
noLimits.actionAtCardPlayed = function(){
    //Discard all hand limit and keeper new rules
};
var rotateHands = new Action("Rotate Hands")
rotateHands.actionAtCardPlayed = function(){
    //Rotate hands in the direction of your choice
};
var rulesReset = new Action("Rules Reset")
rulesReset.actionAtCardPlayed = function(){
    //Reset to basic rules
};
var takeAnotherTurn = new Action("Take Another Turn")
takeAnotherTurn.actionAtCardPlayed = function(){
    //Take another turn after the current turn is completed
};
var taxation = new Action("Taxation")
taxation.actionAtCardPlayed = function(){
    //All players give 1 card from their hand to the player
};
var tradeHands = new Action("Trade Hands")
tradeHands.actionAtCardPlayed = function(){
    //Trade hands with a player of your choice
};
var trashANewRule = new Action("Trash a New Rule")
trashANewRule.actionAtCardPlayed = function(){
    //Discard any new rule
};
var useWhatYouTake = new Action("Use What You Take!")
useWhatYouTake.actionAtCardPlayed = function(){
    //Take a random card from a player, and play it
};
var creeperSweeper = new Action("Creeper Sweeper")
creeperSweeper.actionAtCardPlayed = function(){
    //Discard all creepers on the table
};
var trashSomething = new Action("Trash Something")
trashSomething.actionAtCardPlayed = function(){
    //Discard your choice of any keeper or creeper on the table
};
var stealSomething = new Action("Steal Something")
stealSomething.actionAtCardPlayed = function(){
    //Steal a keeper or creeper from another player
};
var mixItAllUp = new Action("Mix It All Up")
mixItAllUp.actionAtCardPlayed = function(){
    //Gather up all of the keepers and creepers, shuffle them, and deal them back starting with yourself
};
var ItsTrashDay = new Action("It's Trash Day!")
ItsTrashDay.actionAtCardPlayed = function(){
    //All players may discard what they want from their table
};
var sabotage = new Action("Sabotage")
sabotage.actionAtCardPlayed = function(){
    //Give a creeper from yourself or another player to a different player
};
var skipATurn = new Action("Skip a Turn")
skipATurn.actionAtCardPlayed = function(){
    //The next turn is skipped, after the current turn
};
var securityBreach = new Action("Security Breach")
securityBreach.actionAtCardPlayed = function(){
    //Choose a player who must reveal their hand until the end of their next turn
};
var buy1get1free = new Action("Buy One, Get One Free")
buy1get1free.actionAtCardPlayed = function(){
    //Discard 1 card, and draw 2
};
