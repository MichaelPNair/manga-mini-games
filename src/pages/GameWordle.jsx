import { useRef, useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import WordleGuess from "../components/WordleGuess";
import WordleDuringInput from "../components/WordleDuringInput";
import WordleKeyboard from "../components/WordleKeyboard";
import DisplayManga from "../components/DisplayManga";
import './MangaWordle.css'
import { getWinCounts, updateMangaWordleCount } from "../utils/updateGameCount";

const gameWordleAnswers = [
    {
        answer: 'zelda',
        id: 1,
        game: `The Legend of Zelda Breath of the Wild`,
        gameId: ''
    },
    {
        answer: 'super',
        id: 2,
        game: 'Super Mario 64',
        gameId: ''
    },
    {
        answer: 'grand',
        id: 3,
        game: 'grand theft auto V',
        gameId: ''
    },
    {
        answer: 'seven',
        id: 4,
        game: `Super Mario RPG Legend of the Seven Stars`,
        gameId: ''
    },
    {
        answer: 'world',
        id: 5,
        game: 'super mario world',
        gameId: ''
    },
    {
        answer: 'final',
        id: 6,
        game: 'Final Fantasy VII',
        gameId: ''
    },
    {
        answer: 'world',
        id: 7,
        game: 'World of Warcraft',
        gameId: ''
    },
    {
        answer: 'elder',
        id: 8,
        game: 'The Elder Scrolls V Skyrim',
        gameId: ''
    },
    {
        answer: 'metal',
        id: 9,
        game: 'Metal Gear Solid',
        gameId: ''
    },
    {
        answer: 'magic',
        id: 10,
        game: `Heroes of Might and Magic III`,
        gameId: ''
    },
    {
        answer: 'souls',
        id: 11,
        game: 'Dark Souls',
        gameId: ''
    },
    {
        answer: 'among',
        id: 12,
        game: 'Uncharted 2 Among Thieves',
        gameId: ''
    },
    {
        answer: 'prime',
        id: 13,
        game: 'Metroid Prime',
        gameId: ''
    },
    {
        answer: 'disco',
        id: 14,
        game: 'Disco Elysium',
        gameId: ''
    },
    {
        answer: 'final',
        id: 15,
        game: 'Final Fantasy VI',
        gameId: ''
    },
    {
        answer: 'snake',
        id: 16,
        game: 'Metal Gear Solid 3 Snake Eater',
        gameId: ''
    },
    {
        answer: 'money',
        id: 17,
        game: `Hitman Blood Money`,
        gameId: ''
    },
    {
        answer: 'royal',
        id: 18,
        game: 'Persona 5 Royal',
        gameId: ''
    },
    {
        answer: 'smash',
        id: 19,
        game: 'Super Smash Bros Ultimate',
        gameId: ''
    },
    {
        answer: 'super',
        id: 20,
        game: 'Super Mario Odyssey',
        gameId: ''
    },
    {
        answer: 'sonic',
        id: 21,
        game: 'Sonic The Hedgehog',
        gameId: ''
    },
    {
        answer: 'waker',
        id: 22,
        game: 'The Legend of Zelda The Wind Waker',
        gameId: ''
    },
    {
        answer: 'space',
        id: 23,
        game: 'Space Invaders',
        gameId: ''
    },
    {
        answer: 'three',
        id: 24,
        game: 'Fire Emblem Three Houses',
        gameId: ''
    },
    {
        answer: 'braid',
        id: 25,
        game: 'Braid',
        gameId: ''
    },
    {
        answer: 'creed',
        id: 26,
        game: `Assassin's creed`,
        gameId: ''
    },
    {
        answer: 'melee',
        id: 27,
        game: `Super Smash Bros Melee`,
        gameId: ''
    },
    {
        answer: 'shock',
        id: 28,
        game: `System Shock 2`,
        gameId: ''
    },
    {
        answer: 'sands',
        id: 29,
        game: `Prince of Persia The Sands of Time`,
        gameId: ''
    },
    {
        answer: 'quake',
        id: 30,
        game: `Quake`,
        gameId: ''
    },
    {
        answer: 'wilds',
        id: 31,
        game: `Outer Wilds`,
        gameId: ''
    },
    {
        answer: 'final',
        id: 32,
        game: `Final Fantasy Tactics`,
        gameId: ''
    },
    {
        answer: 'elite',
        id: 33,
        game: `Elite`,
        gameId: ''
    },
    {
        answer: 'limbo',
        id: 34,
        game: `Limbo`,
        gameId: ''
    },
    {
        answer: 'world',
        id: 35,
        game: `Monster Hunter World`,
        gameId: ''
    },
    {
        answer: 'gears',
        id: 36,
        game: `Gears of War`,
        gameId: ''
    },
    {
        answer: 'wings',
        id: 37,
        game: `StarCraft II Wings of Liberty`,
        gameId: ''
    },
    {
        answer: 'enemy',
        id: 38,
        game: `XCOM Enemy Unknown`,
        gameId: ''
    },
    {
        answer: 'tides',
        id: 39,
        game: `Warcraft II Tides of Darkness`,
        gameId: ''
    },
    {
        answer: 'space',
        id: 40,
        game: `Dead Space`,
        gameId: ''
    },
    {
        answer: 'ghost',
        id: 41,
        game: `Ghost of Tsushima`,
        gameId: ''
    },
    {
        answer: 'black',
        id: 42,
        game: `Assassin's creen IV Black Flag`,
        gameId: ''
    },
    {
        answer: 'kings',
        id: 43,
        game: `Age of Empires II The Age of Kings`,
        gameId: ''
    },
    {
        answer: 'birds',
        id: 44,
        game: `Angry Birds`,
        gameId: ''
    },
    {
        answer: 'chaos',
        id: 45,
        game: `Splinter Cell Chaos Theory`,
        gameId: ''
    },
    {
        answer: 'thief',
        id: 46,
        game: `Thief The Dark Project`,
        gameId: ''
    },
    {
        answer: 'elder',
        id: 47,
        game: `The Elder Scrolls III Morrowind`,
        gameId: ''
    },
    {
        answer: 'quake',
        id: 48,
        game: `Quake III Arena`,
        gameId: ''
    },
    {
        answer: 'sword',
        id: 49,
        game: `Pokemon Sword`,
        gameId: ''
    },
    {
        answer: 'banjo',
        id: 50,
        game: `Banjo-Kazooie`,
        gameId: ''
    },
    {
        answer: 'total',
        id: 51,
        game: `Rome Total War`,
        gameId: ''
    },
    {
        answer: 'rally',
        id: 52,
        game: `Sega Rally Championship`,
        gameId: ''
    },
    {
        answer: 'trail',
        id: 53,
        game: `The Oregon Trail`,
        gameId: ''
    },
    {
        answer: 'alert',
        id: 54,
        game: `Command & Conquer Red Alert`,
        gameId: ''
    },
    {
        answer: 'quest',
        id: 55,
        game: `Dragon Quest XI`,
        gameId: ''
    },
    {
        answer: 'reign',
        id: 56,
        game: `Warcraft III Reign of Chaos`,
        gameId: ''
    },
    {
        answer: 'story',
        id: 57,
        game: `Her Story`,
        gameId: ''
    },
    {
        answer: 'devil',
        id: 58,
        game: `Devil May Cry`,
        gameId: ''
    },
    {
        answer: 'radio',
        id: 59,
        game: `Jet Set Radio`,
        gameId: ''
    },
    {
        answer: 'stars',
        id: 60,
        game: `Super Mario RPG Legend of the Seven Stars`,
        gameId: ''
    },
    {
        answer: 'theft',
        id: 4,
        game: 'grand theft auto III',
        gameId: ''
    },
    {
        answer: 'dance',
        id: 62,
        game: `Dance Dance Revolution`,
        gameId: ''
    },
    {
        answer: 'brawl',
        id: 63,
        game: `Super Smash Bros Brawl`,
        gameId: ''
    },
    {
        answer: 'black',
        id: 64,
        game: `Pokemon Black Version`,
        gameId: ''
    },
    {
        answer: 'route',
        id: 65,
        game: `Kentucky Route Zero`,
        gameId: ''
    },
    {
        answer: 'fable',
        id: 66,
        game: `Fable`,
        gameId: ''
    },
    {
        answer: 'realm',
        id: 67,
        game: `Final Fantasy XIV Online A Realm Reborn`,
        gameId: ''
    },
    {
        answer: 'ninja',
        id: 68,
        game: `Ninja Gaiden`,
        gameId: ''
    },
    {
        answer: 'twice',
        id: 69,
        game: `Leisure Suit Larry: Wet Dreams Dry Twice`,
        gameId: ''
    },
    {
        answer: 'alien',
        id: 70,
        game: `Alien Isolation`,
        gameId: ''
    },
    {
        answer: 'maker',
        id: 71,
        game: `Super Mario Maker`,
        gameId: ''
    },
    {
        answer: 'final',
        id: 72,
        game: `Final Fantasy XII`,
        gameId: ''
    },
    {
        answer: 'goose',
        id: 73,
        game: `Untitled Goose Game`,
        gameId: ''
    },
    {
        answer: 'light',
        id: 74,
        game: `FTL Faster Than Light`,
        gameId: ''
    },
    {
        answer: 'human',
        id: 75,
        game: `Deus Ex Human Revolution`,
        gameId: ''
    },
    {
        answer: 'blood',
        id: 76,
        game: `Hitman Blood Money`,
        gameId: ''
    },
    {
        answer: 'eater',
        id: 77,
        game: 'Metal Gear Solid 3 Snake Eater',
        gameId: ''
    },
    {
        answer: 'fight',
        id: 78,
        game: `Final Fight`,
        gameId: ''
    },
    {
        answer: 'quest',
        id: 79,
        game: `Dragon Quest Builders 2`,
        gameId: ''
    },
    {
        answer: 'track',
        id: 80,
        game: `Track & Field`,
        gameId: ''
    },
    {
        answer: 'guild',
        id: 81,
        game: `Guild Wars 2`,
        gameId: ''
    },
    {
        answer: 'metal',
        id: 82,
        game: `Metal Slug`,
        gameId: ''
    },
    {
        answer: 'space',
        id: 83,
        game: `Kerbal Space Program`,
        gameId: ''
    },
    {
        answer: 'clank',
        id: 84,
        game: `Ratchet & Clank Up Your Arsenal`,
        gameId: ''
    },
    {
        answer: 'heavy',
        id: 85,
        game: `Heavy Rain`,
        gameId: ''
    },
    {
        answer: 'final',
        id: 86,
        game: `Final Fantasy VIII`,
        gameId: ''
    },
    {
        answer: 'alone',
        id: 87,
        game: `Alone in the Dark`,
        gameId: ''
    },
    {
        answer: 'twice',
        id: 88,
        game: `Sekiro Shadows Die Twice`,
        gameId: ''
    },
    {
        answer: 'third',
        id: 89,
        game: `Street Fighter III Third Strike`,
        gameId: ''
    },
    {
        answer: 'great',
        id: 90,
        game: `Rayman 2 The Great Escape`,
        gameId: ''
    },
    {
        answer: 'blind',
        id: 91,
        game: `Ori and The Blind Forest`,
        gameId: ''
    },
    {
        answer: 'crazy',
        id: 92,
        game: `Crazy Taxi`,
        gameId: ''
    },
    {
        answer: 'paper',
        id: 93,
        game: `Paper Mario`,
        gameId: ''
    },
    {
        answer: 'rogue',
        id: 94,
        game: `Rogue`,
        gameId: ''
    },
    {
        answer: 'crash',
        id: 95,
        game: `Crash Bandicoot`,
        gameId: ''
    },
    {
        answer: 'reach',
        id: 96,
        game: `Halo Reach`,
        gameId: ''
    },
    {
        answer: 'story',
        id: 97,
        game: `Cave Story`,
        gameId: ''
    },
    {
        answer: 'mafia',
        id: 98,
        game: `Mafia`,
        gameId: ''
    },
    {
        answer: 'worms',
        id: 99,
        game: `Worms`,
        gameId: ''
    },
    {
        answer: 'might',
        id: 100,
        game: `Heroes of Might and Magic III`,
        gameId: ''
    },
    {
        answer: 'solid',
        id: 10,
        game: 'Metal Gear Solid',
        gameId: ''
    },
    {
        answer: 'fates',
        id: 102,
        game: `Fire Emblem Fates`,
        gameId: ''
    },
    {
        answer: 'joust',
        id: 103,
        game: `Joust`,
        gameId: ''
    },
    {
        answer: 'turbo',
        id: 104,
        game: `Super Puzzle Fighter II Turbo`,
        gameId: ''
    },
    {
        answer: 'aegis',
        id: 105,
        game: `13 Sentinels Aegis Rim`,
        gameId: ''
    },
    {
        answer: 'outer',
        id: 106,
        game: `Outer Worlds`,
        gameId: ''
    },
    {
        answer: 'omega',
        id: 107,
        game: `Astro Boy: Omega Factor`,
        gameId: ''
    },
    {
        answer: 'alpha',
        id: 108,
        game: `Street Fighter Alpha 3`,
        gameId: ''
    },
    {
        answer: 'dozer',
        id: 109,
        game: `Drill Dozer`,
        gameId: ''
    },
    {
        answer: 'sword',
        id: 110,
        game: `Broken Sword`,
        gameId: ''
    },
    {
        answer: 'night',
        id: 111,
        game: `Summon Night Swordcraft Story 2`,
        gameId: ''
    },
    {
        answer: 'dodge',
        id: 112,
        game: `Super Dodge Ball Advance`,
        gameId: ''
    },
    {
        answer: 'hades',
        id: 113,
        game: `Hades`,
        gameId: ''
    },
    {
        answer: 'ultra',
        id: 114,
        game: `The Stanley Parable Ultra Deluxe`,
        gameId: ''
    },
    {
        answer: 'takes',
        id: 115,
        game: `It Takes Two`,
        gameId: ''
    },
    {
        answer: 'tales',
        id: 116,
        game: `Tales of Arise`,
        gameId: ''
    },
    {
        answer: 'fires',
        id: 117,
        game: `Armored Core VI Fires of Rubicon`,
        gameId: ''
    },
    {
        answer: 'tunic',
        id: 118,
        game: `Tunic`,
        gameId: ''
    },
    {
        answer: 'skies',
        id: 119,
        game: `Dragon Quest IX Sentinels of the Starry Skies`,
        gameId: ''
    },
    {
        answer: 'Elite',
        id: 120,
        game: `Elite Beat Agents`,
        gameId: ''
    },
    {
        answer: 'Devil',
        id: 121,
        game: `Shin Megami Tensei Devil Survivor`,
        gameId: ''
    },
    {
        answer: 'Trick',
        id: 122,
        game: `Ghost Trick Phantom Detective`,
        gameId: ''
    },
    {
        answer: 'heist',
        id: 123,
        game: `SteamWorld Heist`,
        gameId: ''
    },
    {
        answer: 'elder',
        id: 124,
        game: `The Elder Scrolls IV Oblivion`,
        gameId: ''
    },
    {
        answer: 'saber',
        id: 125,
        game: `Beat Saber`,
        gameId: ''
    },
    {
        answer: 'lords',
        id: 126,
        game: `Myth The Fallen Lords`,
        gameId: ''
    },
    {
        answer: 'wrath',
        id: 127,
        game: `World of Warcraft Wrath of the Lich King`,
        gameId: ''
    },
    {
        answer: 'kings',
        id: 128,
        game: `Crusader Kings III`,
        gameId: ''
    },
    {
        answer: 'ninja',
        id: 129,
        game: `Mark of the Ninja`,
        gameId: ''
    },
    {
        answer: 'white',
        id: 130,
        game: `Black & White`,
        gameId: ''
    },
    {
        answer: 'cells',
        id: 131,
        game: `Dead Cells`,
        gameId: ''
    },
    {
        answer: 'spire',
        id: 132,
        game: `Slay the Spire`,
        gameId: ''
    },
    {
        answer: 'pizza',
        id: 133,
        game: `Pizza Tower`,
        gameId: ''
    },
    {
        answer: 'curse',
        id: 134,
        game: `The Curse of Monkey Island`,
        gameId: ''
    },
    {
        answer: 'wisps',
        id: 135,
        game: `Ori and the Will of the Wisps`,
        gameId: ''
    },
    {
        answer: 'abyss',
        id: 136,
        game: `Ultima Underworld The Stygian Abyss`,
        gameId: ''
    },
    {
        answer: 'pixel',
        id: 137,
        game: `Final Fantasy VI Pixel Remaster`,
        gameId: ''
    },
    {
        answer: 'skies',
        id: 138,
        game: `Sunless Skies`,
        gameId: ''
    },
    {
        answer: 'death',
        id: 139,
        game: `Death Stranding`,
        gameId: ''
    },
    {
        answer: 'among',
        id: 140,
        game: `Among Us`,
        gameId: ''
    },
    {
        answer: 'stick',
        id: 141,
        game: `South Park The Stick of Truth`,
        gameId: ''
    },
    {
        answer: 'cross',
        id: 142,
        game: `Chrono Cross`,
        gameId: ''
    },
    {
        answer: 'night',
        id: 143,
        game: `Castlevania Symphony of the Night`,
        gameId: ''
    },
    {
        answer: 'story',
        id: 144,
        game: `Vagrant Story`,
        gameId: ''
    },
    {
        answer: 'skies',
        id: 145,
        game: `Skies of Arcadia`,
        gameId: ''
    },
    {
        answer: 'front',
        id: 146,
        game: `Front Mission III`,
        gameId: ''
    },
    {
        answer: 'lunar',
        id: 147,
        game: `Lunar: Silver Star Story`,
        gameId: ''
    },
    {
        answer: 'tales',
        id: 148,
        game: `Tales of Symphonia`,
        gameId: ''
    },
    {
        answer: 'light',
        id: 149,
        game: `Blue Reflection: Second Light`,
        gameId: ''
    },
    {
        answer: 'nexus',
        id: 150,
        game: `Scarlet Nexus`,
        gameId: ''
    },
    {
        answer: 'steel',
        id: 151,
        game: `Fuga: Melodies of Steel`,
        gameId: ''
    }
]


const wordleAnswers = [
    {
        answer: 'guild',
        id: 1,
        manga: `I May Be a Guild Receptionist, but I'll Solo Any Boss to Clock Out on Time`,
        mangaId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
    },
    {
        answer: 'piece',
        id: 2,
        manga: 'One Piece',
        mangaId: 'a1c7c817-4e59-43b7-9365-09675a149a6f'
    },
    {
        answer: 'great',
        id: 3,
        manga: 'Great Teacher Onizuka',
        mangaId: '02860cdf-1020-40f1-a23f-2025d80f6290'
    },
    {
        answer: 'grand',
        id: 4,
        manga: 'Grand Blue',
        mangaId: 'fffbfac3-b7ad-41ee-9581-b4d90ecec941'
    },
    {
        answer: 'march',
        id: 5,
        manga: 'March comes in like a lion',
        mangaId: '0ca1627e-95dd-4118-892a-f144adf02256'
    },
    {
        answer: 'witch',
        id: 6,
        manga: 'witch hat atelier',
        mangaId: '67e7453b-9ee5-4ae5-9316-215b03e4a71d'
    },
    {
        answer: 'voice',
        id: 7,
        manga: 'A Silent Voice',
        mangaId: '4bde51e5-e420-45a4-98e9-7405bf2d59ff'
    },
    {
        answer: 'stray',
        id: 8,
        manga: 'Bungou Stray Dogs',
        mangaId: '3fba42cf-2ad6-4c30-a7ab-46cb8149208a'
    },
    {
        answer: 'punch',
        id: 9,
        manga: 'One Punch Man',
        mangaId: 'd8a959f7-648e-4c8d-8f23-f1f3f8e129f3'
    },
    {
        answer: 'plain',
        id: 10,
        manga: 'Shiori Experience: My Plain Self',
        mangaId: 'd58abdf4-9268-41d8-9920-f8fe8858a173'
    },
    {
        answer: 'slime',
        id: 11,
        manga: 'That Time I Got Reincarnated as a Slime',
        mangaId: 'e78a489b-6632-4d61-b00b-5206f5b8b22b'
    },
    {
        answer: 'world',
        id: 12,
        manga: 'Rebuild World',
        mangaId: '99182618-ae92-4aec-a5df-518659b7b613'
    },
    {
        answer: 'demon',
        id: 13,
        manga: 'Demon Slayer',
        mangaId: '789642f8-ca89-4e4e-8f7b-eee4d17ea08b'
    },
    {
        answer: 'astro',
        id: 14,
        manga: 'Astro Boy',
        mangaId: 'ca4c84bb-7272-45aa-a22d-dc1282b52372'
    },
    {
        answer: 'touch',
        id: 15,
        manga: 'Touch',
        mangaId: '36b4c3d4-629d-45cb-b911-ae0906f6b544'
    },
    {
        answer: 'ghoul',
        id: 16,
        manga: 'Tokyo Ghoul',
        mangaId: '6a1d1cb1-ecd5-40d9-89ff-9d88e40b136b'
    },
    {
        answer: 'quest',
        id: 17,
        manga: 'Dragon Quest Dai no Daiboken',
        mangaId: '3a3cfc32-357e-4b50-a660-5ce4b58dfcbc'
    },
    {
        answer: 'black',
        id: 18,
        manga: 'Black butler',
        mangaId: '8bd19e5c-94f7-4368-a918-50f463857446'
    },
    {
        answer: 'death',
        id: 19,
        manga: 'Death Note',
        mangaId: '75ee72ab-c6bf-4b87-badd-de839156934c'
    },
    {
        answer: 'flame',
        id: 20,
        manga: 'Flame of Recca',
        mangaId: 'fd3db4be-b2d0-41ab-895b-de5dc99b4f9d'
    },
    {
        answer: 'magic',
        id: 21,
        manga: 'Magi: The Labyrinth of Magic',
        mangaId: 'ce63e6b8-fad8-48bc-a2aa-d801fb8d5d43'
    },
    {
        answer: 'steel',
        id: 22,
        manga: 'Steel Ball Run',
        mangaId: 'b30dfee3-9d1d-4e8d-bfbe-8fcabc3c96f6'
    },
    {
        answer: 'titan',
        id: 23,
        manga: 'Attack on Titan',
        mangaId: '304ceac3-8cdb-4fe7-acf7-2b6ff7a60613'
    },
    {
        answer: 'pluto',
        id: 24,
        manga: 'Pluto',
        mangaId: 'e171c073-4415-499b-85bc-ea93825127ac'
    },
    {
        answer: 'akira',
        id: 25,
        manga: 'Akira',
        mangaId: '175cf215-2122-4656-9fac-37ac092438af'
    },
    {
        answer: 'stone',
        id: 26,
        manga: 'Dr. Stone',
        mangaId: 'cfc3d743-bd89-48e2-991f-63e680cc4edf'
    },
    {
        answer: 'ocean',
        id: 27,
        manga: 'Jojos bizzare adventure stone ocean',
        mangaId: 'ea57752d-acb7-469e-aa60-43e694ded9a9'
    },
    {
        answer: 'north',
        id: 28,
        manga: 'Fist of the North Star',
        mangaId: '75251a47-952c-4e38-b1c6-3572b9bfd481'
    },
    {
        answer: 'conan',
        id: 29,
        manga: 'Detective Conan',
        mangaId: '7f30dfc3-0b80-4dcc-a3b9-0cd746fac005'
    },
    {
        answer: 'metal',
        id: 30,
        manga: 'Fullmetal Alchemist',
        mangaId: 'dd8a907a-3850-4f95-ba03-ba201a8399e3'
    },
    {
        answer: 'fairy',
        id: 31,
        manga: 'Fairy Tail',
        mangaId: '227e3f72-863f-46f9-bafe-c43104ca29ee'
    },
    {
        answer: 'major',
        id: 32,
        manga: 'Major',
        mangaId: '491aba94-e971-4911-8a93-0b1200403f4b'
    },
    {
        answer: 'glass',
        id: 33,
        manga: 'Glass Mask',
        mangaId: '51fe4713-013a-4acc-8874-bfd01b60eff9'
    },
    {
        answer: 'saint',
        id: 34,
        manga: 'Saint Seiya',
        mangaId: '67bc662a-dba4-4616-9da0-fa0e18e87383'
    },
    {
        answer: 'crest',
        id: 35,
        manga: 'Crest of the Royal Family',
        mangaId: 'a0861345-be1a-4f4d-97bb-6310b91cb32b'
    },
    {
        answer: 'slump',
        id: 36,
        manga: 'dr Slump',
        mangaId: '985e4ae6-7a36-42c5-ae12-f4291c58798c'
    },
    {
        answer: 'index',
        id: 37,
        manga: 'A Certain Magical Index',
        mangaId: '229e5177-2e71-4642-bd56-a9b0b0ba0e60'
    },
    {
        answer: 'space',
        id: 38,
        manga: 'Space Brothers',
        mangaId: 'a437129d-18e9-48d7-9484-9fb9b9073ddd'
    },
    {
        answer: 'happy',
        id: 39,
        manga: 'happy!',
        mangaId: 'd670572b-d21a-474c-a03d-7ec50bd53030'
    },
    {
        answer: 'seven',
        id: 40,
        manga: 'seven deadly sins',
        mangaId: 'e52d9403-3356-403b-b7bb-d7d6a420dd50'
    },
    {
        answer: 'pedal',
        id: 41,
        manga: 'yowamushi pedal',
        mangaId: '003e7fbf-f047-4783-a7df-1533a2a653d4'
    },
    {
        answer: 'heart',
        id: 42,
        manga: 'angel heart',
        mangaId: '31be4cc4-d7c8-47d7-9d80-4f1b2db7979e'
    },
    {
        answer: 'fable',
        id: 43,
        manga: 'the fable',
        mangaId: '5209fe10-4a14-403f-8837-2ccf8cced253'
    },
    {
        answer: 'force',
        id: 44,
        manga: 'fire force',
        mangaId: 'ec514ef4-fb77-43b9-b9b4-528229de1308'
    },
    {
        answer: 'giant',
        id: 45,
        manga: 'giant killing',
        mangaId: '3b6c3a0b-8752-41fc-9d3e-1310f6f28252'
    },
    {
        answer: 'drops',
        id: 46,
        manga: 'drops of god',
        mangaId: 'd9414237-832b-46a7-9fb4-1c66f4b97736'
    },
    {
        answer: 'punch',
        id: 47,
        manga: 'fire punch',
        mangaId: '6fef1f74-a0ad-4f0d-99db-d32a7cd24098'
    },
    {
        answer: 'otaku',
        id: 48,
        manga: 'wotakoi',
        mangaId: '65263bf9-4f87-4513-b72f-ad6436b3911c'
    },
    {
        answer: 'abyss',
        id: 49,
        manga: 'made in abyss',
        mangaId: '80422e14-b9ad-4fda-970f-de370d5fa4e5'
    },
    {
        answer: 'given',
        id: 50,
        manga: 'given',
        mangaId: '039d717e-9690-47fd-944d-93161b97fbac'
    },
    {
        answer: 'cross',
        id: 51,
        manga: 'cross game',
        mangaId: '8bd288e6-7c5a-403a-b5b6-a845a70ca376'
    },
    {
        answer: 'giant',
        id: 52,
        manga: 'blue giant',
        mangaId: '1090afe3-3b91-4325-a9b4-d92875aa815e'
    },
    {
        answer: 'house',
        id: 53,
        manga: 'Radiation house',
        mangaId: '96338481-0531-4a25-b209-152e4178684b'
    },
    {
        answer: 'dance',
        id: 54,
        manga: 'SKET dance',
        mangaId: '566eb93d-5958-44ca-b9d3-a8335bfead5a'
    },
    {
        answer: 'bride',
        id: 55,
        manga: 'The ancient magus bride',
        mangaId: '195023bf-cf9a-4772-94ef-09dd6eddea84'
    },
    {
        answer: 'angel',
        id: 56,
        manga: 'Angel Densetsu',
        mangaId: 'e1b7fb5c-dc71-4727-8086-5d89e144091f'
    },
    {
        answer: 'black',
        id: 57,
        manga: 'black lagoon',
        mangaId: '6da0b34b-db19-491a-b85c-6e31e0986f15'
    },
    {
        answer: 'seeds',
        id: 58,
        manga: '7 seeds',
        mangaId: 'ce47b821-988c-4abf-a8dd-864cef84585a'
    },
    {
        answer: 'spice',
        id: 59,
        manga: 'Spice and Wolf',
        mangaId: 'de900fd3-c94c-4148-bbcb-ca56eaeb57a4'
    },
    {
        answer: 'clear',
        id: 60,
        manga: 'cardcaptor sakura clear card',
        mangaId: '78218ec5-b7ea-4c03-accd-df98c3d8e350'
    },
    {
        answer: 'score',
        id: 61,
        manga: 'high score girl',
        mangaId: 'a59ec084-aed4-4a49-abc1-ae08cf7a9aa7'
    },
    {
        answer: 'steps',
        id: 62,
        manga: 'baby steps',
        mangaId: 'c433f163-d610-49ba-a031-a1f3b6377af2'
    },
    {
        answer: 'eater',
        id: 63,
        manga: 'soul eater',
        mangaId: '53ef1720-7a5d-40ad-90b0-2f9ca0a1ab01'
    },
    {
        answer: 'blast',
        id: 64,
        manga: 'sayuki reload blast',
        mangaId: '09aa712c-1457-4779-b2a0-877099a4c0e2'
    },
    {
        answer: 'rough',
        id: 65,
        manga: 'rough',
        mangaId: '7cdc3e9a-e948-4bd6-9b57-e7fc4e92df63'
    },
    {
        answer: 'hotel',
        id: 66,
        manga: 'voynich hotel',
        mangaId: 'f75812e9-27bb-44d5-9cb1-25de07ceb326'
    },
    {
        answer: 'metal',
        id: 67,
        manga: 'Detroit Metal City',
        mangaId: '087e1ee7-491e-4e67-b3c2-44d227cb0584'
    },
    {
        answer: 'dress',
        id: 68,
        manga: 'My dress up darling',
        mangaId: 'aa6c76f7-5f5f-46b6-a800-911145f81b9b'
    },
    {
        answer: 'harem',
        id: 69,
        manga: 'giji harem',
        mangaId: 'd8f9afe2-aa44-4bc6-9145-eebb1f282372'
    },
    {
        answer: 'sword',
        id: 70,
        manga: 'sword art online',
        mangaId: '3dd0b814-23f4-4342-b75b-f206598534f6'
    },
    {
        answer: 'black',
        id: 71,
        manga: 'black cat',
        mangaId: 'b8627f53-f262-49dc-ad4a-89e8f15baa47'
    },
    {
        answer: 'tokyo',
        id: 72,
        manga: 'tokyo revengers',
        mangaId: '59b36734-f2d6-46d7-97c0-06cfd2380852'
    },
    {
        answer: 'books',
        id: 73,
        manga: 'ascendence of a bookworm',
        mangaId: 'c0ad8919-4646-4a61-adf9-0fd6d8612efa'
    },
    {
        answer: 'train',
        id: 74,
        manga: 'densha otoko',
        mangaId: '7b514e78-ce00-44c2-aa6f-718e17f782f2'
    },
    {
        answer: 'witch',
        id: 75,
        manga: 'flying witch',
        mangaId: 'f7f430ab-2c24-49d3-b698-c9ff4787805b'
    },
    {
        answer: 'uncle',
        id: 76,
        manga: 'isekai ojisan',
        mangaId: 'd8f1d7da-8bb1-407b-8be3-10ac2894d3c6'
    },
    {
        answer: 'lucky',
        id: 77,
        manga: 'lucky star',
        mangaId: '31fbb1af-3df1-496e-992f-b7f96a34d1ab'
    },
    {
        answer: 'saint',
        id: 78,
        manga: 'saint young men',
        mangaId: 'e1d6dd1c-5ceb-44f7-bfe6-f74199288b07'
    },
    {
        answer: 'candy',
        id: 79,
        manga: 'candy candy',
        mangaId: '0b2beaa6-08df-44e5-a404-ecee109744fc'
    },
    {
        answer: 'seven',
        id: 80,
        manga: 'Eureka Seven',
        mangaId: '5353b1d5-ceec-40d7-b025-2690a6108b72'
    },
    {
        answer: 'break',
        id: 81,
        manga: 'Break Blade',
        mangaId: 'cc70ba46-e0d4-4240-98ba-adb86c82ff6b'
    },
    {
        answer: 'peace',
        id: 82,
        manga: 'Peace Maker',
        mangaId: '2679b5bc-63de-4009-a273-08ccdea73d38'
    },
    {
        answer: 'seven',
        id: 83,
        manga: 'trinity seven',
        mangaId: '12ac16ec-8894-420b-bc03-eade9340dfd8'
    },
    {
        answer: 'blade',
        id: 84,
        manga: 'break blade',
        mangaId: 'cc70ba46-e0d4-4240-98ba-adb86c82ff6b'
    },
    {
        answer: 'magic',
        id: 85,
        manga: 'Magic Knight Rayearth',
        mangaId: '20331b71-1d3f-4aed-b990-e54298424488'
    },
    {
        answer: 'devil',
        id: 86,
        manga: 'Defense Devil',
        mangaId: '3e11670e-1e34-4d67-8dea-a40ee6b73c6c'
    },
    {
        answer: 'beast',
        id: 87,
        manga: 'Beast Complex',
        mangaId: 'cd9b65e3-b9e2-4d8b-b9dd-0bc8be59f312'
    },
    {
        answer: 'japan',
        id: 88,
        manga: 'yakitate japan',
        mangaId: '0c29ce86-04c7-45cb-b623-70510b2064e3'
    }
    
]


export default function GameWordle({onClickHome, user}) {

    const [newGuessText, setNewGuessText] = useState('')

    const [guesses, setGuesses] = useState([])

    const [isFinished, setIsFinished] = useState(false)
    const [isWon, setIsWon] = useState(false)

    const [gameAnswer, setGameAnswer] = useState(wordleAnswers[Math.floor(Math.random()* wordleAnswers.length)])

    const [countFromAPI, setCountFromAPI] = useState(null)

    const [keyboardColor, setKeyboardColor] = useState({
        a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
    })

    const inputRef = useRef(null)

    useEffect(() => {
        if (user) {
            getWinCounts()
                .then(res => {
                    setCountFromAPI(res.data.wordleWins)
                })
        }

    }, [user])




    function handleNewGame(){
        setNewGuessText('')
        setGuesses([])
        setIsFinished(false)
        setIsWon(false)
        setKeyboardColor({
            a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
        })
        setGameAnswer(wordleAnswers[Math.floor(Math.random()* wordleAnswers.length)])
        inputRef.current.focus()
    }

    async function handleWin(){
        setNewGuessText('')
        setIsFinished(true)
        setIsWon(true)
        if(user) {
            await updateMangaWordleCount(user.username)
            setCountFromAPI(countFromAPI + 1)
        }
    }

    function handleGiveUp(){
        setNewGuessText('')
        setIsFinished(true)
    }
    
    function handleChange(e){
        if (e.target.value.match(/^[a-zA-Z]*$/)){
            if (e.target.value.length <= 5){
                setNewGuessText(e.target.value)
            } else {
                setNewGuessText(e.target.value.slice(0,5))
            }
        }
    }

    function onKeyboardClick(e){
        if (newGuessText.length < 5){
            setNewGuessText(text => text + e.target.innerText.toLowerCase())
            inputRef.current.focus()
        }
    }

    function handleSymbolClick(){
        if (newGuessText.length === 5){
            setGuesses([...guesses, newGuessText])
            changeKeyboardColor(newGuessText)
            setNewGuessText('')
            if (newGuessText === gameAnswer.answer) {
                handleWin()
            } else {
                inputRef.current.focus()
            }
        }
    }

    function handleEnter(e){
        if (e.keyCode === 13) {
            if (newGuessText.length === 5){
                setGuesses([...guesses, newGuessText])
                changeKeyboardColor(newGuessText)
                setNewGuessText('')
                if (newGuessText === gameAnswer.answer) {
                    handleWin()
                }
            }
        }
    }

    function changeKeyboardColor(newGuessText){
        let guessArray = newGuessText.toUpperCase().split('')
        let answerArray = gameAnswer.answer.toUpperCase().split('')

        let displayColors = ['grey-letter','grey-letter','grey-letter','grey-letter','grey-letter']
    
        for (let i=0; i<5; i++){
            if (guessArray[i] === answerArray[i]){
                displayColors[i] = 'green-letter'
                guessArray[i] = ''
                answerArray[i] = ''
            }
        }
    
        for (let i=0; i<5; i++){
            if (displayColors[i] !== 'green-letter'){
                if (answerArray.indexOf(guessArray[i]) !== -1){
                    displayColors[i] = 'yellow-letter'
                    answerArray[answerArray.indexOf(guessArray[i])] = ''
                    guessArray[i] = ''
                }
            }
        }

        for (let i=0; i<5; i++){
            if(displayColors[i] === 'grey-letter' && keyboardColor[newGuessText[i].toLowerCase()] === 'plain-key'){
                updateKeyboard(newGuessText[i].toLowerCase() , 'grey-key')
            }
        }
        for (let i=0; i<5; i++){
            if(displayColors[i] === 'yellow-letter' && !(keyboardColor[newGuessText[i].toLowerCase()] === 'green-key')){
                updateKeyboard(newGuessText[i].toLowerCase() , 'yellow-key')
            }
        } 
        for (let i=0; i<5; i++){
            if(displayColors[i] === 'green-letter'){
                updateKeyboard(newGuessText[i].toLowerCase() , 'green-key')
            }
        } 
    }

    function updateKeyboard(letter, color){
        setKeyboardColor(keyboard => ({...keyboard, [letter]: color}))
    }


    return <div>
        <MainTitle user={user}/>
        <BackButton onClick={onClickHome}/>
        <h2>Game Word Guesser</h2>
        <button disabled={!isFinished} onClick={handleNewGame}>New Game</button>
        <button disabled={isFinished} onClick={handleGiveUp}>Give Up</button>
        <p>Guess the word</p>
        {user ? <p>You have won {countFromAPI} times</p> : false}
        <p>{isWon && `Congratulations! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1)}!`}</p>
        <p>{(isFinished && !isWon) && `Too bad! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1).toLowerCase()}!`}</p>
        {isFinished && <DisplayManga mangaId={gameAnswer.mangaId}/>}
        {guesses.map((guess, idx) => <WordleGuess key={idx} guess={guess} answer={gameAnswer.answer}/>)}
        {!isFinished && <WordleDuringInput text={newGuessText}/>}

        <input autoFocus ref={inputRef} value={newGuessText}  hidden={isFinished} onChange={handleChange} onKeyDown={handleEnter} type="text" />
        <span hidden={!(newGuessText.length === 5)} onClick={handleSymbolClick} className="enter-symbol">⏎</span>
        <WordleKeyboard keyboardColor={keyboardColor} onClick={onKeyboardClick}/>


    </div>
}