import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName('choochoo')
	.setDescription('This is a demo choo choo!');

// may be able to add a web scraper at this function
export async function execute(interaction) {
	await interaction.reply('choo choo!');
}
