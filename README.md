# Top Chef RPG

The Top Chef role playing game where the user traverses the culinary world, fighting chefs using their cooking skills to become the number one chef in the world. 

The game contains unique log-in and character creation. Save game states to maintain character progress. 6 unique locations and chefs to battle it out with and a wide variety of foods to create to display your characters cooking prowess. 

The game is currently in Pre-pre-post-pre ALPHA stage.

## Features

* User password protected log-in
* Character creation
* Leveling methods of all character skills
* Saved character states 
* Unique chef fighting gameplay
* Endgame battle 


## NPMs Required

* Bulma
* dotenv
* express
* express-handlebars
* express-session
* mysql2
* sequelize


## Application Walkthrough

#### User Log-in

Insert a username and password into the form. If the user does not already have a username and password simply type in a new username and password and select the "Sign Up" button. If the username already exists the user will be prompted with a warning indicating that and a new unique username will be required to be entered.

If the user has an existing username and password, it is required to insert both into their repsective fields and select the "Log In" button. If the password is incorrect the user will be prompted with a warning indicating that and the correct password will be required to be entered.

#### Character Creation

After successfully logging in the user will be brought to the character page. This page displays all of the characters previously created by the user, displaying the characters name and stats as well as includes the "Create New Character" button. Selecting this button will bring up a modal which allows the user to input the name and stats their new character will have. After creating a character it will be displayed in the character page along with any previously created by the user. To continue to the game a character will need to be selected by clicking on the "Select this Chef" button.

#### Homepage 

Once the user has selected their character they're brought to the homepage. This page consists of of a display of the characters name, stats, as well as contains a map showing the 6 different locations the user can go to to challenge NPC chefs. Selecting one of thse buttons will take the users character to that location.

#### Chef Battles 

The chef battles start off with a friendly introduction from the NPC chef. After clicking end the user is given 3 different dishes to make the chef. Once a dish is selected the associated skill tied to the dish will be used to generate damage dealt to the chef. Each dish can only be made once per fight. If the users character reduces the NPC chefs health to 0, they will be rewarded with two additional skill points per skill associated with the environments dishes, otherwise only one additional skill point will be rewarded for trying. This is how each environment plays out with the exception of "Hells Kitchen" which does not provide any additional skill points upon winning or losing.

Once the user wins or loses in a location they must select the return button. This will take them back to teh homepage. 


#### Credits

Created by : 
    Kira Williams
    Will McNamara
    Stefano Georges