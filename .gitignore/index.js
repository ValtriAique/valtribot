

const Discord = require('discord.js');
const errors = require("./utils/errors.js");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const PREFIX = "&";

const adapter = new FileSync('DataBase.json');
const db = low(adapter);
//MSGP = Message privé

var bot = new Discord.Client();
var prefix = ("&");
var randum = 0;
bot.on("ready", function () {
  bot.user.setActivity(`&help | ${bot.guilds.size} Serveurs  | ${bot.users.size} Utilisateurs`, {url: 'https://www.twitch.tv/valentin26exe'}, {type: 'WATCHING'})

    bot.user.setUsername("Valtri_AiqueBOT")
    console.log("*``*___*``*");
    console.log("Valtri_Aique - Connecté");
        console.log("*``*___*``*");
});

bot.login('NDU1MDA5NzY1MzQxMzk2OTky.Dq3kTQ.L2xw6NECxF9Yppkdn4EL67EhxrI')

bot.on('message', message => {
    if (message.author.equals(bot.user)) return;
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("pong");
        message.channel.send("https://image.noelshack.com/fichiers/2018/24/2/1528824183-download.jpg");
        console.log("Ping Pong");
    }

    if (message.content === prefix + "help"){
      var help_embeds = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle("HELP FUN")
      .setColor ('#01F94B')
      .addField("&pong", "Le bot repond ping !")
      .addField('&ping', "le Bot repond pong !")
      .addField("&DM", "Je t'envoie un message privé")
      .addField('ca va Valtri_AiqueBOT', "Le bot repond sont humeur")
      .addField("&PFC", "Pierre Feuille ciseau")
      .addField("&ps4", "TK78 rage")
      .addField("&tg", "FERME TA GUEULE")
      .addField('&non', "non")
      .addField("&oui", "oui")
      .setFooter("&Valtri_AiqueBOT , un bot par -Valtri_Aique")
      .setThumbnail(message.author.avatarURL)
      message.author.sendEmbed(help_embeds);
      /*message.*/
      //message.channel.sendMessage("Voici Les commandes du Bot Valtri_Aique :\n -/help pour afficher les commandes :\n /ping   pong !");
      console.log("CMD help demandée !");
  message.delete();
       }
    if (message.content === prefix + "help"){
      var Helphere_embeds = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("HELP INFORMATION")
        .setDescription("[>>> Serveur Officiel <<<](https://discord.gg/VRg8eUq)")
        .addField("&uptime", "Permet de voir le temp de fonctionnent bot / ping ect...")
        .addField('&helphere', "Permet de voir le commande du bot")
        .addField('&help', "Permet de voir la commande du bot")
        .addField('&Valtri_AiqueBotINFO', "Permet de voir quelque info sur le bot")
        .addField("&myinfo", "Permet de voir quelque info sur TOI")
        .addField("&yourinfo", "Permet de voir quelque info sur le bot ")         
        message.author.sendEmbed(Helphere_embeds);
    }
    if (message.content === prefix + "helphere"){
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
      var helpheremod = new Discord.RichEmbed()
          .setTitle('MODERATION')
          .addField('&mod', "Commandes pour voir toutes les commandes de modération")
          .setColor("RANDOM")
          message.channel.sendEmbed(helpheremod)
    }
    if(message.content === prefix + "setup"){
      if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var setup = new Discord.RichEmbed()
          .setColor('RANDOM')
          .addField('SETUP', "En cas de problème merci de le faire remonter sur le serveur officiel \n                     [>>>>>>Serveur OFFICIEL<<<<<<](https://discord.gg/TZFfbd5)")
      message.author.sendEmbed(setup);
    }
    if(message.content === prefix + "setup"){
      message.delete();
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":warning: **Tu n'est pas ADMINISTRATEUR donc je te déconseille d'éffetuer cette commande !** :exclamation:");
      message.guild.createChannel(`𝕧𝕒𝕝𝕥𝕣𝕚-𝕘𝕝𝕠𝕓𝕒𝕝`, 'text')
      message.guild.createChannel(`𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤`, 'text')
      message.guild.createChannel(`𝕧𝕒𝕝𝕥𝕣𝕚-𝕤𝕠𝕟𝕕𝕒𝕘𝕖`, 'text')
      message.guild.createChannel(`𝕧𝕒𝕝𝕥𝕣𝕚-𝕣𝕖𝕡𝕠𝕣𝕥𝕤`, 'text')
      message.guild.createChannel(`𝕧𝕒𝕝𝕥𝕣𝕚-𝕟𝕖𝕨𝕤`, 'text')
      message.guild.createChannel("⛔sanction⛔", 'text')
      message.guild.createChannel("Valtri_AiqueBot", "category")
    }   

    if(message.content === prefix + "unsetup"){
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("TU N'AS PAS LE DROIT DE FAIRE CETTE COMMANDE ! :x:")

      message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").delete().then(console.log).catch(console.error);
      message.guild.channels.find('name', "𝕧𝕒𝕝𝕥𝕣𝕚-𝕤𝕠𝕟𝕕𝕒𝕘𝕖").delete().then(console.log).catch(console.error);
      message.guild.channels.find('name', "𝕧𝕒𝕝𝕥𝕣𝕚-𝕣𝕖𝕡𝕠𝕣𝕥𝕤").delete().then(console.log).catch(console.error);
      message.guild.channels.find('name', "𝕧𝕒𝕝𝕥𝕣𝕚-𝕟𝕖𝕨𝕤").delete().then(console.log).catch(console.error);
      message.guild.channels.find('name', "𝕧𝕒𝕝𝕥𝕣𝕚-𝕘𝕝𝕠𝕓𝕒𝕝").delete().then(console.log).catch(console.error);
      
      

    
    }


     
     if (message.content === prefix + "helphere"){
        var help_embeds = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle("HELP FUN")
        .setColor ('#01F94B')
        .addField("&pong", "Le bot repond ping !")
        .addField('&ping', "le Bot repond pong !")
        .addField("&DM", "Je t'envoie un message privé")
        .addField('ca va Valtri_AiqueBOT', "Le bot repond sont humeur")
        .addField("&PFC", "Pierre Feuille ciseau")
        .addField("&ps4", "TK78 rage")
        .addField("&tg", "FERME TA GUEULE")
        .addField('&non', "non")
        .addField("&oui", "oui")
        .setFooter("Valtri_AiqueBOT , un bot par -Valtri_Aique")
        .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(help_embeds);
        /*message.*/
        //message.channel.sendMessage("Voici Les commandes du Bot Valtri_Aique :\n -/help pour afficher les commandes :\n /ping   pong !");
        console.log("CMD help demandée !");
    message.delete();
         }
      if (message.content === prefix + "helphere"){
        var Helphere_embeds = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("HELP INFORMATION")
          .setDescription("[>>> Serveur Officiel <<<](https://discord.gg/VRg8eUq)")
          .addField("&uptime", "Permet de voir le temp de fonctionnent bot / ping ect...")
          .addField('&helphere', "Permet de voir le commande du bot")
          .addField('&help', "Permet de voir la commande du bot")
          .addField('&Valtri_AiqueBotINFO', "Permet de voir quelque info sur le bot")
          .addField("&myinfo", "Permet de voir quelque info sur TOI")
          .addField("&yourinfo", "Permet de voir quelque info sur le bot ")         
          message.channel.sendEmbed(Helphere_embeds);
      }
      if (message.content === prefix + "help"){
        var helpmod2 = new Discord.RichEmbed()
            .setTitle('MODERATION')
            .addField('&mod', "Commandes pour voir toutes les commandes de modération")
            .setColor("RANDOM")
            message.author.sendEmbed(helpmod2)
      }

      if (message.content === prefix + "help"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
          var helpmod3 = new Discord.RichEmbed()
              .setTitle("IMPORTANT")
              .setColor("RANDOM")
              .addField("Faites &setup pour le bon fonctionnent du Bot !", "Vous n'êtes pas Oubliger (Le Bot ne va Pas Crash !) ")
              message.author.send(helpmod3);
      }
            if (message.content === prefix + "tg"){
        var tg = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setImage("https://media1.tenor.com/images/2abb30639b7855b532ce4ca5e3d7f1cb/tenor.gif?itemid=5034357")
          message.channel.sendEmbed(tg)
          message.delete();
      }
      if (message.content === prefix + "ps4"){
        message.channel.send('https://www.youtube.com/watch?v=isbJj4qzE0c')
        message.delete();
            
      }
      if (message.content === prefix + "non"){
          var nan = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setImage("https://media.giphy.com/media/3oKIPj8bJ9ky9ubKGQ/giphy.gif")
          .setFooter('Commande par :'+message.author.username)
          message.channel.sendEmbed(nan)
          message.delete();
      }
      if (message.content === prefix + "oui"){
        var oui = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setImage("https://media.giphy.com/media/GYx3rLjdBPfyM/giphy.gif")
        .setFooter('Commande par :'+message.author.username)
        message.channel.sendEmbed(oui)
        message.delete();
    }

     if (message.content ==="ca va Valtri_AiqueBOT"){
        message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes : ca va Valtri_AiqueBOT -|- Par ${message.author.username}`)
        message.delete();
         ramdom();

        if (randum == 3){
            message.reply("Merci , ca va Bof")
            console.log("Reponse 3")
        }


        if (randum == 1){
            message.reply("Merci , je vais très Bien");
            console.log("Reponse 1");
         }
        

         if (randum == 2){
             message.reply("Merci , ca va moyen");
             console.log("Reponse 2");

         }


         if (randum == 0){
             message.reply("Ca va pas très bien , Merci tu me reconforte ")
             console.log("Reponse 0")
         }




        

         }
         if (message.content === prefix + "help help"){// lollollololololololool
           message.reply(` Cette commande n'as aucun intéret pourquoi tu l'as fais  ?me repondre de sert a rien je suis un bot Mais bien Tenté sinon ${message.author.mentionned}`)
         }
         if (message.content === prefix + "help helphere"){
          message.reply(` Cette commande n'as aucun intéret pourquoi tu l'as fais  ?me repondre de sert a rien je suis un bot Mais bien Tenté sinon ${message.author.mentionned}`)
        }
        if (message.content === prefix + "help +"){
          
        }
         if (message.content === prefix + "DM"){
            message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes :&DM -|- Par ${message.author.username}`)
            message.delete();
            DM();


        if (randomDm == 0){
            message.author.send("Hey ,:white_check_mark: ");
            message.channel.send('DM envoyer !'); 
        }

        if (randomDm == 1){
            message.author.send('Salut :x:');
            message.channel.send('DM envoyer !');
        }
        if (randomDm == 2){
            message.author.send("Ceci est un Dm");
            message.channel.send('DM envoyer !');
        }
        if (randomDm == 3){
            message.author.send("Coucou https://media1.tenor.com/images/1e552665a50994f2ed2892a03cfe71c4/tenor.gif?itemid=10424260");
            message.channel.send('DM envoyer !');
        }



         }
         if (message.content === prefix + "PFC"){
            message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes : &PFC -|- Par ${message.author.username}`)
            message.delete();
            PierreFeuilleCiseau();



        if (PFC == 0){ //:page_facing_up: // :scissors:  // :white_check_mark: //:gem: 
            message.channel.send('1');
            message.channel.send('2');
            message.channel.send('3');
            message.channel.send('Pierre Feuille Ciseau !');
            message.channel.send('CISEAUX ! :white_check_mark: :scissors:   ');
        }
        if (PFC == 1){
            message.channel.send('1');
            message.channel.send('2');
            message.channel.send('3');
            message.channel.send('Pierre Feuille Ciseau !'); 
            message.channel.send("FEUILLE ! :white_check_mark: :page_facing_up:"); 
        }
        if (PFC == 2){
            message.channel.send('1');
            message.channel.send('2');
            message.channel.send('3');
            message.channel.send('Pierre Feuille Ciseau !'); 
            message.channel.send("PIERRE ! :white_check_mark: :gem:"); 
        }




         }

        
        if (message.content === PREFIX + "myinfo"){
            var myinfo = new Discord.RichEmbed()
                .setTitle("T'es INFOMATION")
                .setColor('RANDOM')
                .addField("Date de création de ton compte :", `${message.author.createdAt}`)
                .addField("Ton ID client :", `${message.author.id}`)
                .addField("ID de ton message `&myinfo`", `${message.author.lastMessageID}`)
                .addField("Ton dernier message", `${message.author.lastMessage}`)
                .setThumbnail(message.author.avatarURL)
                message.channel.send(myinfo);
                console.log("myinfo");
                message.delete();
                message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commande : &myinfo -|- Par ${message.author.username}`);
        }
        if (message.content === prefix + "yourinfo"){
            message.channel.send("&myinfo");
            message.delete();
        }


       
        
     

         
        

  
        
        if (message.content === prefix + "Valtri_AiqueBotINFO"){
        var Val_embeds = new Discord.RichEmbed()
            .setColor('#01F94B')    
            .addField("InfoMation Valtri_Aique BOT", " \n  -Créateur : Valtri_Aique \n  -herbergement : Valtri_Aique \n  -partenarial : Finésticraft , Team Slime /discord pour plus d'info :eyes: \n  -Codé Par : Valtri_Aique   ")
            .setFooter("Tu veux être Helpeur ? https://docs.google.com/forms/d/1CQ_uMMD8xlluA2X-KRHMyaXhC6cGkUCnmvVj_IsHhL0/ ")
            message.author.sendEmbed(Val_embeds);
            message.channel.send(":regional_indicator_v: :regional_indicator_a: :regional_indicator_l: :regional_indicator_t: :regional_indicator_r: :regional_indicator_i:             :regional_indicator_a: :regional_indicator_i: :regional_indicator_q: :regional_indicator_u: :regional_indicator_e: ");
            message.channel.send("Réponse Des Information de VALTRI_AIQUEBOT Dans t'es message Privé look (si tu ma pas bloquer ) :eyes: ");
            console.log("Info Valtri_AiqueBOT ");
            message.delete();
            message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes : &Valtri_AiqueBotINFO -|- par ${message.author.username}`)
        }
        if (message.content === prefix + "pong"){
            message.channel.send("Ping !");
            message.channel.send("https://image.noelshack.com/fichiers/2018/24/2/1528824183-download.jpg");
            console.log("Pong");
            message.delete();
        } 
        if (message.content.startsWith(prefix + "clear")){
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas le droit de faire cette commande !");
            let args = message.content.split(" ").slice(1);
    
            if(!args[0]) return message.channel.send("Il faut definir un nombre apres le &clear :warning: ATTENTION LE nombre dois être defini entre 1 et 100 a cause de l'API Désolé Je veux que se sois plus que 100 mais je ne peux rien faire ! :warning:")
            message.channel.bulkDelete(args[0]).then(() =>{
                var Clear = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle("Clear")
                .addField("Channel", message.channel.name)
                .addField("Modérateur", ""+message.author)
                .addField("Nombre de Message clear", `${args[0]}`)
                message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").sendEmbed(Clear).then(console.log).catch(console.error);

            }
            )} 
        if (message.content.startsWith(prefix + "mod")) {
            if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas le droit de faire cette commande !");

            var Admin_embeds = new Discord.RichEmbed()
                .setColor('#78ErF9Y')
                .addField("Commandes admin", "&Clear : sert a clear les messages (Perm : MANAGE_MESSAGES)")
                .addField("&wh", "Voir tout les types de warn =)")
                .addField("&dellogs", "comme le clear sans message , pour del les logs (Perm : ADMINSTRATOR) alias : &da")
                message.channel.sendEmbed(Admin_embeds);
                message.channel.send("```Les commandes Admin certaine commandes vous devez avoir la Permission MANAGE_MESSAGE / gérer les messages ```")
                console.log("Admin_embeds");
                message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes : &mod -|- Par : ${message.author.username}`).then(console.log).catch(console.error);          
                message.delete();
        }
        if (message.content === prefix){
            message.channel.send("Tu ne connais pas les commandes fait &help !");
            console.log("&");
            message.delete();
        }

        if (message.content === prefix + "sk reload"){
            message.reply("ON N'AI PAS SUR MC LA ! ")
            message.delete();
        }
        /*if (message.content.startsWith(prefix + "mute")) {
            if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Tu n'as pas le droit de faire cette commande ! "); 

            if(message.mentions.users.size === 0) { 
                return message.channel.send("Vous devez mentionner un utilisateur");
            }
            var mute = message.guild.member(message.mentions.users.first());
            if(!mute) {
                return message.channel.send(`${message.author.username} Tu a mis un utilisateur mais il est incorrect ! Sais pas compliqué de mettre un utilisateur correct nan ? `);
            }
            if(!message.guild.member('455009765341396992').hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas la permission (MANAGE_ROLES)");
            message.mute.addRole('445145281630175244').then(console.log).catch(console.error);
            message.channel.send(`:white_check_mark: ${mute} à été mute avec success !`)
   }
        if (message.content.startsWith(prefix + "unmute")) {
            if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Tu n'as pas le droit de faire cette commande ! ");
            message.member.removeRole('445145281630175244').then(console.log).catch(console.error);
        
            }*/


        if (message.content === prefix + "code"){
            message.reply(" ? Tu veux savoir les bases de code ? Fais : &code 1")
            message.delete();
        }        
        if (message.content === prefix + "code 1"){
        var code_1_embeds = new Discord.RichEmbed()
            .setColor('#78Gh6H7')
            .addField("C'est le debut de codage ", "Feet -Valtri_Aique")
            message.channel.sendEmbed(code_1_embeds);
            message.channel.send("Pour faire un bot discord il faut avoir un logiciel de codage (moi Visual studio code) et il faut npm et node.js ");
            message.channel.send("Pour le debut il faut le crée le bot aller sur ```https://discordapp.com/developers/applications/me ```crée un aplication avec le nom de votre bot (super-bot) metter le description (facultative) et metter l'icone du bot / avatar (facultative) et appuyer sur Créer une App");
            message.channel.send("Attention pour créer un bot vous avez bessoin d'un ordinateur obligatoire !")
            message.channel.send("pour + &code 2")
            console.log("log de code_1_embeds");  
            message.delete();       
        }
        if (message.content === prefix + "code 2"){
            message.channel.send("Des que l'app est créer aller sur Bot est appuyé sur créer un utilisateur bot et en suite appuyé sur bot public ");
            message.channel.send("copier l'id du bot est aller sur ```https://discordapi.com/permissions.html#0 ``` et cocher les permission que le bot aura (conseil prenez tout) mettez l'id du bot dans Client ID:_______  et cliquer sur le Link pour inviter le bot dans un serveur (prenez un serveur test)");
            message.channel.send("crée un dossier ou il y a le bot puis crée un autre dossier le nom : 'node_modules' aller dans la barre de recherche de votre ordinateur et taper: 'node' appuyer sur: 'node.js command prompt' et tapper le chemin d'acces de votre dosier pas node_module mais le 1er que t'as créer (chemn d'acces exemple= C:\Création_Java\BOT_DISCORD ) tapper ducoup 'cd C:\Création_Java\BOT_DISCORD ' puis tapper 'npm install discord.js' de que cela est installer faites clique droit dans le dossier puis cliquer sur 'open with code' de que cela et fait crée un fichier .js (dans le dossier avec Visual Studio Code ) de que cela et fait Taper ```const Discord = require('discord.js'); ```");
            message.channel.send("```var bot = new Discord.Client();```");
            message.channel.send('```var prefix = ("LE PREFIX DE TON BOT")```');
            message.channel.send("```bot.on ('ready',() => {```");
            message.channel.send("```bot.user.setPresence({ game: {name: 'LE JEU QUI JOUERA', type: 0}})```");
            message.channel.send('```console.log("Le Bot est maintenant prêt !"); ``` ');
            message.channel.send("```}); ```");
            message.channel.send("Pour plus &code 3");
            message.delete();
            
        }
        if (message.content === prefix + "code 3 1"){
            message.channel.send("``` bot.on('message', message =>{ ``` ");
            message.channel.send("```LA```");
            message.channel.send('```});```');
            message.delete();
        }
        if (message.content === prefix + "code 3"){
            message.channel.send("Tapper``` bot.login('Le jeton de votre bot/token qui as dans la page https://discordapp.com/developers/applications/me ')``` ");
            message.channel.send(" apres il faut tapper (pour commencer a faire les commandes ) ");
            message.channel.send(" ```bot.on('message', message =>{ ```");
            message.channel.send("  ");
            message.channel.send("```});```");
            message.channel.send("  entre les deux bot.on et }); tapper  ");
            message.channel.send('``` if (message.content === prefix + "help"){ ```');
            message.channel.send('``` }```');
            message.channel.send('Encore entre les 2 (ca { et ca })');
            message.channel.send('```//MSG = LE MESSAGE A écrire ```')
            message.channel.send('tapper ```message.reply("LE MSG");``` ou ```message.channel.send("LE MSG "); ```la différence entre les 2 ces que le 1er mentionne et le 2 ème ne mentionne pas ! ')
            message.channel.send('Si tu ne comprend pas le "Entre bot.on et }); "fait la commande &code 3 1" ')
            message.delete();
        }
        
    

    
         var fs = require('fs');
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
if (message.content.startsWith(prefix + "warn")){
if (message.channel.type === "dm") return;
var mentionned = message.mentions.users.first();
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
if(message.mentions.users.size === 0) {
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
}else{
const args = message.content.split(' ').slice(1);
    const mentioned = message.mentions.users.first();
    if (message.member.hasPermission('MANAGE_MESSAGES')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          if (args.slice(1).length != 0) {
            const date = new Date().toUTCString();
            if (warns[message.guild.id] === undefined)
              warns[message.guild.id] = {};
            if (warns[message.guild.id][mentioned.id] === undefined)
              warns[message.guild.id][mentioned.id] = {};
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
            } else {
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
                time: date,
                user: message.author.id};
            }
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
message.delete();
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti** :white_check_mark: ');

            var WARN_LOG = new Discord.RichEmbed()
                .setColor('#FE0000')
                .setTitle('WARN')
                .addField("Attention !", `${message.author} à averti `+mentionned+`    `)
                .addField('Raison:', ` `+ args.slice(1).join(' '))
            message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").sendEmbed(WARN_LOG).then(console.log).catch(console.error);
            
            var WARN_SANCTION = new Discord.RichEmbed()
                .setColor("#FE0000")
                .setTitle(`[WARN] ${mentionned.username}`)
                .addField("Utilisateur", `${mentionned}`)
                .addField("Modérateur", `${message.author.username}`)
                .addField("Raison", ''+args.slice(1).join(' ')) 
                message.guild.channels.find("name", "⛔sanction⛔").sendEmbed(WARN_SANCTION).then(console.log).catch(console.error);          
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
          } else {
            message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission ``Gérer Les Messages`` dans ce serveur**");
    }
  }
}

  if (message.content.startsWith(prefix+"voirwarns")||message.content===prefix+"voirwarns") {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
    const mentioned = message.mentions.users.first();
    const args = message.content.split(' ').slice(1);
    if (message.member.hasPermission('MANAGE_MESSAGES')){
      if (message.mentions.users.size !== 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          try {
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
              return;
            }
          } catch (err) {
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
            message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(` ${message.author.username} a regarde les warns de `+mentioned.tag+` ! `);
            return;
          }
          let arr = [];
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
          for (var warn in warns[message.guild.id][mentioned.id]) {
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
            message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(` ${message.author.username} a regarde les warns de `+mentioned+` ! `);
          }
          message.channel.send(arr.join('\n'));
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"voirwarns <user>");
          console.log(args);
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+prefix+"voirwarns <user> ");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer Les Messages` dans ce serveur**");
    }
  }

  if (message.content.startsWith(prefix+"deletewarns")||message.content===prefix+"deletewarns") {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);
   const mentioned = message.mentions.users.first();
    const args = message.content.split(' ').slice(1);
    const arg2 = Number(args[1]);
    if (message.member.hasPermission('ADMINISTRATOR')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
          if (!isNaN(arg2)) {
            if (warns[message.guild.id][mentioned.id] === undefined) {
              message.channel.send(mentioned.tag+" n'a aucun warn");
              return;
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
              message.channel.send("**:x: Ce warn n'existe pas**");
              return;
            }
            delete warns[message.guild.id][mentioned.id][arg2];
            var i = 1;
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
              var val=warns[message.guild.id][mentioned.id][key];
              delete warns[message.guild.id][mentioned.id][key];
              key = i;
              warns[message.guild.id][mentioned.id][key]=val;
              i++;
            });
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              delete warns[message.guild.id][mentioned.id];
            }
            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);
            var delwarn = new Discord.RichEmbed()
                .setColor('#E8F5AOC')
                .setTitle('DEL WARN !')
                .addField('Attention', `Le(s) warn(s) de `+mentioned.tag+`  à été del par ${message.author.username} `)
                message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").sendEmbed(delwarn).then(console.log).catch(console.error);
            return;
          } if (args[1] === "tout") {
            delete warns[message.guild.id][mentioned.id]
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!:white_check_mark:`);
            return;
          } else {
            message.channel.send("Erreur mauvais usage: "+prefix+"deleterwarns <utilisateur> <nombre>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"deletewarns <utilisateur> <nombre>");
        }
      } else {
       message.channel.send("Erreur mauvais usage: "+prefix+"deletewarns <utilisateur> <nombre>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");
    }
  }
  if(message.content.startsWith(prefix + "wh")) { 
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send ("Vous n'avez pas la permission de faire cette commande");
    
    
    var lol = new Discord.RichEmbed()
        .setColor('#77945IR')
        .addField("&warn <@utilisateur> <Raison>", "Pour avertir un/une utilisateur (Perm : MANAGE_MESSAGES)")
        .addField("&voirwarns <@utilisateur>", "Pour voir le warn d'un/d'une utilisateur(Perm : MANAGE_MESSAGE)")
        .addField("&deletewarns <@utilisateur> <nombre de warn a del>", "Pour enlever c'est warn (plutot logique)(Perm : ADMINSTRATOR)")
            message.channel.send(lol);
            console.log("lol");
            message.delete();
            message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes : &wh -|- Par ${message.author.username}`).then(console.log).catch(console.error); 
  }
  if (message.content.startsWith(prefix + "dellogs")){
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas le droit de faire cette commande !");
      let args = message.content.split(" ").slice(1);

      if(!args[0]) return message.channel.send("Il faut definir un nombre apres le &dellogs :warning: ATTENTION LE nombre dois être defini entre 1 et 100 a cause de l'API Désolé Je veux que se sois plus que 100 mais je ne peux rien faire ! :warning:")
      message.channel.bulkDelete(args[0]).then(() =>{
      }
      )}
if (message.content.startsWith(prefix + "général")){
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas le droit de faire cette commande !");
    message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes : &général -|- Par ${message.author.username}`).then(console.log).catch(console.error);
    message.guild.channels.find("name", "général").send(`Voici le lien du Discord de la ${message.guild.name} \n https://discord.gg/RddUqwd \nVous avez le droit de Recruter quelqu'un si vous avez le grade Mettre un grade(et vous mettez le grade Membre à Vérifier ). `).then(console.log).catch(console.error);
    message.delete();
}
if (message.content.startsWith(prefix + "g")){
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas le droit de faire cette commande !");
    message.guild.channels.find("name", "𝕧𝕒𝕝𝕥𝕣𝕚-𝕝𝕠𝕘𝕤").send(`Commandes : &g -|- Par ${message.author.username}`).then(console.log).catch(console.error);
    message.guild.channels.find("name", "général").send(`Voici le lien du Discord de la ${message.guild.name} \n https://discord.gg/RddUqwd \nVous avez le droit de Recruter quelqu'un si vous avez le grade Mettre un grade(et vous mettez le grade Membre à Vérifier ). `).then(console.log).catch(console.error);
    message.delete();
}
if (message.content.startsWith(prefix + "uptime")) {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
let ms = bot.uptime;
let cd = 24 * 60 * 60 * 1000; // Calc days
let ch = 60 * 60 * 1000; // Calc hours
let cm = 60 * 1000; // Calc minutes
let cs = 1000; // Calc seconds
let days = Math.floor(ms / cd);
let dms = days * cd; // Days, in ms
let hours = Math.floor((ms - dms) / ch);
let hms = hours * ch; // Hours, in ms
let minutes = Math.floor((ms - dms - hms) / cm);
let mms = minutes * cm; // Minutes, in ms
let seconds = Math.round((ms - dms - hms - mms) / cs);
if (seconds === 60) {
  minutes++; // Increase by 1
  seconds = 0;
}
if (minutes === 60) {
  hours++; // Inc by 1
  minutes = 0;
}
if (hours === 24) {
  days++; // Increase by 1
  hours = 0;
}
let dateStrings = [];

if (days === 1) {
  dateStrings.push('**1** jour');
} else if (days > 1) {
  dateStrings.push('**' + String(days) + '** jours');
}

if (hours === 1) {
  dateStrings.push('**1** heure' );
} else if (hours > 1) {
  dateStrings.push('**' + String(hours) + '** heures');
}

if (minutes === 1) {
  dateStrings.push('**1** minute');
} else if (minutes > 1) {
  dateStrings.push('**' + String(minutes) + '** minutes');
}

if (seconds === 1) {
  dateStrings.push('**1** seconde');
} else if (seconds > 1) {
  dateStrings.push('**' + String(seconds) + '** secondes');
}

let dateString = '';
for (let i = 0; i < dateStrings.length - 1; i++) {
  dateString += dateStrings[i];
  dateString += ', ';
}
if (dateStrings.length >= 2) {
  dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
  dateString += 'et ';
}

dateString += dateStrings[dateStrings.length - 1];

const embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setTimestamp()
.setThumbnail(message.author.iconURL)
.addField(':clock: Actif ', 'Le bot est actif', false )
.addField(':white_check_mark: Bot actif depuis :', dateString, false )
//.addField ('Nombre de commande', `${totalcmd} commandes`, false) 
.addField ('📈 Utilisation mémoire' , `${Math.round(used * 100) / 100} MB/2.5GB`, false)
.addField(':runner: Serveur disponible :', `**${bot.guilds.size}** servers`, false )
.addField ('👥 Utilisateur:', ` ${bot.users.size} utilisateurs`, false)
.addField ('🏓 Ping :', `${Date.now() - message.createdTimestamp} ms`, false)
.setColor("ff0000");
message.channel.send({embed})
.catch(console.error);
message.delete();
}

    if (message.content.startsWith(prefix + "da")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas le droit de faire cette commande !")
        
        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Il faut definir un nombre apres le &da ! :warning: ATTENTION LE nombre dois être defini entre 1 et 100 a cause de l'API Désolé Je veux que se sois plus que 100 mais je ne peux rien faire ! :warning:")
        message.channel.bulkDelete(args[0]).then(() =>{
        }
        )}
      /*  if (message.content.startsWith(prefix + "chatglobal")){
            let args = message.content.split(" ").slice(1);
    
            if(!args[0]) return message.channel.send("Il faut mettre un message après ")
                var repeat_embeds = new Discord.RichEmbed()
                  .setAuthor(message.author.username , message.author.avatarURL)  
                  .addField("&global", `${args[0]}`)
                  c.channels.find("𝕧𝕒𝕝𝕥𝕣𝕚-𝕘𝕝𝕠𝕓𝕒𝕝").sendEmbed(repeat_embeds)
              message.delete();
      
            } */
 

        if (message.content === prefix + "slime Vert"){
            message.member.addRole('462681844492533796').then(console.log).catch(console.error); 
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
            if (message.content === prefix + "slime remove Vert"){
                message.member.removeRole('462681844492533796').then(console.log).catch(console.error);
                message.channel.send('Le role a bien été  enlevé !');
                message.delete();
        }
        if (message.content === prefix + "slime Violet"){
            message.member.addRole('462681839811821569').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove Violet"){
        message.member.removeRole('462681839811821569').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }
        if (message.content === prefix + "slime BleuT"){
            message.member.addRole('462690097205346304').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove BleuT"){
            message.member.removeRole('462690097205346304').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }
        if (message.content === prefix + "slime Jaune"){
            message.member.addRole('462681845985968130').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove Jaune"){
            message.member.removeRole('462681845985968130').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }



        if (message.content === prefix + "slime Rouge"){
            message.member.addRole('462681767032258561').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove Rouge"){
            message.member.removeRole('462681767032258561').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }
        if (message.content === prefix + "slime Bleu"){
            message.member.addRole('462681836276154368').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove Bleu"){
            message.member.removeRole('462681836276154368').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }

        if (message.content === prefix + "slime Maron"){
            message.member.addRole('462682141835264001').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove Maron"){
            message.member.removeRole('462682141835264001').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }

        if (message.content === prefix + "slime Rose"){
            message.member.addRole('473566432538656768').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove Rose"){
            message.member.removeRole('473566432538656768').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }




        if (message.content === prefix + "slime Orange"){
            message.member.addRole('462682349579010048').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été atribué !');
            message.delete();
        }
        if (message.content === prefix + "slime remove Orange"){
            message.member.removeRole('462682349579010048').then(console.log).catch(console.error);
            message.channel.send('Le role a bien été enlevé !');
            message.delete();
        }
        if (message.content === prefix + "slime Gris"){
          message.member.addRole('462682145136050177').then(console.log).catch(console.error);
          message.channel.send('Le role a bien été atribué !');
          message.delete();
      }
      if (message.content === prefix + "slime remove Gris"){
          message.member.removeRole('462682145136050177').then(console.log).catch(console.error);
          message.channel.send('Le role a bien été enlevé !');
          message.delete();
      }

      if (message.content === prefix + "slime Noir"){
        message.member.addRole('462682149116444672').then(console.log).catch(console.error);
        message.channel.send('Le role a bien été atribué !');
        message.delete();
    }
    if (message.content === prefix + "slime remove Noir"){
        message.member.removeRole('462682149116444672').then(console.log).catch(console.error);
        message.channel.send('Le role a bien été enlevé !');
        message.delete();
    }
    if (message.content === prefix + "son"){
        var sondage = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("NEW")
            .setDescription("Le Nouveau Pack de la Slime Est Arrivé !")
            .addField("Le Voici le Voila", "-->[Pack De la Slime](http://www.mediafire.com/file/1x7b9yl77sa4gv4/%21+++++++%C2%A72Slime+%C2%A7aPack.rar)<--")
            message.channel.send("@everyone")
        message.channel.sendEmbed(sondage);
        message.delete();
        
        
        
    }
    if (message.content === prefix + "staff iripeur") {
        var Staff_IRIPEUR_embeds = new Discord.RichEmbed()
            .setTitle("Staff iripeur - Serveur Discord")
            .setColor('RANDOM')
            .addField("Lien d'invitation du serveur !", "Le lien D'invitation : [ICI](https://discord.gg/RGhR57N)")
            .addField("Fondateur , Fondatrice", "Chilésa -🐼 \n Valtri_Aique")
            .addField("SuperModérateur , SuperModératrice", "❤-Naila-🐼\n Valtri_èke")
            .addField('Modérateur Modératrice', "Showmon 2.0")
            .addField("Helpeur Heulpeuse", "GensLArgent")
            .setFooter("Message envoyer par :"+message.author.username)
            message.channel.sendEmbed(Staff_IRIPEUR_embeds)
            message.delete();
            
    }
    if (message.content === prefix + "staff"){
        message.reply("tu dois mettre [iripeur] Apres Staff pour voir le staff d'iripeur")
    }


function ramdom(min, max){
    min = Math.ceil(0);
    max = Math.floor(3);
    randum = Math.floor(Math.random()  * (max - min +1) + min);
}
function DM(min, max){
    min = Math.ceil(0);
    max = Math.floor(3);
    randomDm = Math.floor(Math.random()  * (max - min +1) + min);
}
function PierreFeuilleCiseau(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    PFC = Math.floor(Math.random()  * (max - min +1) + min);
}  

});
