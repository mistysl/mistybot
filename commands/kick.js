const Discord = require('discord.js');

exports.run = (client, message, [mention, ...reason]) => {
  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} was succesfully kicked.`);
  });
};
module.exports.config = {
	name: 'kick',
	aliases: [],
};