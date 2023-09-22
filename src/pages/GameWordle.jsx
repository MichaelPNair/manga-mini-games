import { useRef, useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import WordleGuess from "../components/WordleGuess";
import WordleDuringInput from "../components/WordleDuringInput";
import WordleKeyboard from "../components/WordleKeyboard";
import './GameWordle.css'
import { getWinCounts, updateMangaWordleCount } from "../utils/updateGameCount";
import DisplayGame from "../components/DisplayGame";

const gameWordleAnswers = [
    {
        answer: 'tears',
        id: 1,
        game: `The Legend of Zelda Tears of the Kingdom`,
        gameId: '327239'
    },
    {
        answer: 'super',
        id: 2,
        game: 'Super Mario 64',
        gameId: '54528'
    },
    {
        answer: 'grand',
        id: 3,
        game: 'Grand Theft Auto V',
        gameId: '3498'
    },
    {
        answer: 'seven',
        id: 4,
        game: `Super Mario RPG Legend of the Seven Stars`,
        gameId: '25557'
    },
    {
        answer: 'world',
        id: 5,
        game: 'Super Mario World',
        gameId: '24899'
    },
    {
        answer: 'final',
        id: 6,
        game: 'Final Fantasy VII',
        gameId: '52939'
    },
    {
        answer: 'world',
        id: 7,
        game: 'World of Warcraft',
        gameId: '23599'
    },
    {
        answer: 'elder',
        id: 8,
        game: 'The Elder Scrolls V Skyrim',
        gameId: '5679'
    },
    {
        answer: 'metal',
        id: 9,
        game: 'Metal Gear Solid',
        gameId: '57607'
    },
    {
        answer: 'magic',
        id: 10,
        game: `Heroes of Might and Magic III`,
        gameId: '22685'
    },
    {
        answer: 'souls',
        id: 11,
        game: 'Dark Souls',
        gameId: '5538'
    },
    {
        answer: 'among',
        id: 12,
        game: 'Uncharted 2 Among Thieves',
        gameId: '22513'
    },
    {
        answer: 'prime',
        id: 13,
        game: 'Metroid Prime',
        gameId: '56123'
    },
    {
        answer: 'disco',
        id: 14,
        game: 'Disco Elysium',
        gameId: '262382'
    },
    {
        answer: 'final',
        id: 15,
        game: 'Final Fantasy VI',
        gameId: '1063'
    },
    {
        answer: 'snake',
        id: 16,
        game: 'Metal Gear Solid 3 Snake Eater',
        gameId: '52369'
    },
    {
        answer: 'money',
        id: 17,
        game: `Hitman Blood Money`,
        gameId: '19569'
    },
    {
        answer: 'royal',
        id: 18,
        game: 'Persona 5 Royal',
        gameId: '339958'
    },
    {
        answer: 'smash',
        id: 19,
        game: 'Super Smash Bros Ultimate',
        gameId: '58829'
    },
    {
        answer: 'super',
        id: 20,
        game: 'Super Mario Odyssey',
        gameId: '27150'
    },
    {
        answer: 'sonic',
        id: 21,
        game: 'Sonic The Hedgehog',
        gameId: '53551'
    },
    {
        answer: 'waker',
        id: 22,
        game: 'The Legend of Zelda The Wind Waker',
        gameId: '27975'
    },
    {
        answer: 'space',
        id: 23,
        game: 'Space Invaders',
        gameId: '52444'
    },
    {
        answer: 'three',
        id: 24,
        game: 'Fire Emblem Three Houses',
        gameId: '736265'
    },
    {
        answer: 'braid',
        id: 25,
        game: 'Braid',
        gameId: '5161'
    },
    {
        answer: 'creed',
        id: 26,
        game: `Assassin's creed`,
        gameId: '4729'
    },
    {
        answer: 'melee',
        id: 27,
        game: `Super Smash Bros Melee`,
        gameId: '56222'
    },
    {
        answer: 'shock',
        id: 28,
        game: `System Shock 2`,
        gameId: '10615'
    },
    {
        answer: 'sands',
        id: 29,
        game: `Prince of Persia The Sands of Time`,
        gameId: '13909'
    },
    {
        answer: 'quake',
        id: 30,
        game: `Quake`,
        gameId: '54491'
    },
    {
        answer: 'wilds',
        id: 31,
        game: `Outer Wilds`,
        gameId: '58764'
    },
    {
        answer: 'final',
        id: 32,
        game: `Final Fantasy Tactics`,
        gameId: '52949'
    },
    {
        answer: 'elite',
        id: 33,
        game: `Elite`,
        gameId: '53811'
    },
    {
        answer: 'limbo',
        id: 34,
        game: `Limbo`,
        gameId: '1030'
    },
    {
        answer: 'world',
        id: 35,
        game: `Monster Hunter World`,
        gameId: '46889'
    },
    {
        answer: 'gears',
        id: 36,
        game: `Gears of War`,
        gameId: '28615'
    },
    {
        answer: 'wings',
        id: 37,
        game: `StarCraft II Wings of Liberty`,
        gameId: '38067'
    },
    {
        answer: 'enemy',
        id: 38,
        game: `XCOM Enemy Unknown`,
        gameId: '13910'
    },
    {
        answer: 'tides',
        id: 39,
        game: `Warcraft II Tides of Darkness`,
        gameId: '57967'
    },
    {
        answer: 'space',
        id: 40,
        game: `Dead Space`,
        gameId: '4570'
    },
    {
        answer: 'ghost',
        id: 41,
        game: `Ghost of Tsushima`,
        gameId: '58550'
    },
    {
        answer: 'black',
        id: 42,
        game: `Assassin's Creed IV Black Flag`,
        gameId: '3841'
    },
    {
        answer: 'kings',
        id: 43,
        game: `Age of Empires II The Age of Kings`,
        gameId: '32595'
    },
    {
        answer: 'birds',
        id: 44,
        game: `Angry Birds`,
        gameId: '144'
    },
    {
        answer: 'chaos',
        id: 45,
        game: `Splinter Cell Chaos Theory`,
        gameId: '20709'
    },
    {
        answer: 'thief',
        id: 46,
        game: `Thief The Dark Project`,
        gameId: '31777'
    },
    {
        answer: 'elder',
        id: 47,
        game: `The Elder Scrolls III Morrowind`,
        gameId: '13820'
    },
    {
        answer: 'arena',
        id: 48,
        game: `Quake III Arena`,
        gameId: '54718'
    },
    {
        answer: 'sword',
        id: 49,
        game: `Pokemon Sword`,
        gameId: '282825'
    },
    {
        answer: 'banjo',
        id: 50,
        game: `Banjo-Kazooie`,
        gameId: '28532'
    },
    {
        answer: 'total',
        id: 51,
        game: `Rome Total War`,
        gameId: '14929'
    },
    {
        answer: 'rally',
        id: 52,
        game: `Sega Rally Championship`,
        gameId: '53520'
    },
    {
        answer: 'trail',
        id: 53,
        game: `The Oregon Trail`,
        gameId: '56681'
    },
    {
        answer: 'alert',
        id: 54,
        game: `Command & Conquer Red Alert`,
        gameId: '5163'
    },
    {
        answer: 'quest',
        id: 55,
        game: `Dragon Quest XI`,
        gameId: '58084'
    },
    {
        answer: 'reign',
        id: 56,
        game: `Warcraft III Reign of Chaos`,
        gameId: '30445'
    },
    {
        answer: 'story',
        id: 57,
        game: `Her Story`,
        gameId: '2287'
    },
    {
        answer: 'devil',
        id: 58,
        game: `Devil May Cry`,
        gameId: '5540'
    },
    {
        answer: 'radio',
        id: 59,
        game: `Jet Set Radio`,
        gameId: '53341'
    },
    {
        answer: 'stars',
        id: 60,
        game: `Super Mario RPG Legend of the Seven Stars`,
        gameId: '25557'
    },
    {
        answer: 'theft',
        id: 61,
        game: 'Grand Theft Auto III',
        gameId: '432'
    },
    {
        answer: 'dance',
        id: 62,
        game: `Dance Dance Revolution`,
        gameId: '52845'
    },
    {
        answer: 'brawl',
        id: 63,
        game: `Super Smash Bros Brawl`,
        gameId: '25414'
    },
    {
        answer: 'black',
        id: 64,
        game: `Pokemon Black Version`,
        gameId: '330615'
    },
    {
        answer: 'route',
        id: 65,
        game: `Kentucky Route Zero`,
        gameId: '17010'
    },
    {
        answer: 'fable',
        id: 66,
        game: `Fable`,
        gameId: '19635'
    },
    {
        answer: 'realm',
        id: 67,
        game: `Final Fantasy XIV Online A Realm Reborn`,
        gameId: '3727'
    },
    {
        answer: 'ninja',
        id: 68,
        game: `Ninja Gaiden`,
        gameId: '53973'
    },
    {
        answer: 'twice',
        id: 69,
        game: `Leisure Suit Larry: Wet Dreams Dry Twice`,
        gameId: '493449'
    },
    {
        answer: 'alien',
        id: 70,
        game: `Alien Isolation`,
        gameId: '3556'
    },
    {
        answer: 'maker',
        id: 71,
        game: `Super Mario Maker`,
        gameId: '27984'
    },
    {
        answer: 'final',
        id: 72,
        game: `Final Fantasy XII`,
        gameId: '33'
    },
    {
        answer: 'goose',
        id: 73,
        game: `Untitled Goose Game`,
        gameId: '59637'
    },
    {
        answer: 'light',
        id: 74,
        game: `FTL Faster Than Light`,
        gameId: '624'
    },
    {
        answer: 'human',
        id: 75,
        game: `Deus Ex Human Revolution`,
        gameId: '4440'
    },
    {
        answer: 'blood',
        id: 76,
        game: `Hitman Blood Money`,
        gameId: '19569'
    },
    {
        answer: 'eater',
        id: 77,
        game: 'Metal Gear Solid 3 Snake Eater',
        gameId: '52369'
    },
    {
        answer: 'fight',
        id: 78,
        game: `Final Fight`,
        gameId: '53291'
    },
    {
        answer: 'quest',
        id: 79,
        game: `Dragon Quest Builders 2`,
        gameId: '282807'
    },
    {
        answer: 'track',
        id: 80,
        game: `Track & Field`,
        gameId: '52467'
    },
    {
        answer: 'guild',
        id: 81,
        game: `Guild Wars 2`,
        gameId: '29746'
    },
    {
        answer: 'metal',
        id: 82,
        game: `Metal Slug`,
        gameId: '14948'
    },
    {
        answer: 'space',
        id: 83,
        game: `Kerbal Space Program`,
        gameId: '2213'
    },
    {
        answer: 'clank',
        id: 84,
        game: `Ratchet & Clank Up Your Arsenal`,
        gameId: '4283'
    },
    {
        answer: 'heavy',
        id: 85,
        game: `Heavy Rain`,
        gameId: '2743'
    },
    {
        answer: 'final',
        id: 86,
        game: `Final Fantasy VIII`,
        gameId: '5115'
    },
    {
        answer: 'alone',
        id: 87,
        game: `Alone in the Dark`,
        gameId: '15512'
    },
    {
        answer: 'twice',
        id: 88,
        game: `Sekiro Shadows Die Twice`,
        gameId: '50734'
    },
    {
        answer: 'rival',
        id: 89,
        game: `Rival Schools`,
        gameId: '57728'
    },
    {
        answer: 'cling',
        id: 90,
        game: `Tactics Ogre Let Us Cling Together`,
        gameId: '4791'
    },
    {
        answer: 'blind',
        id: 91,
        game: `Ori and The Blind Forest`,
        gameId: '19590'
    },
    {
        answer: 'crazy',
        id: 92,
        game: `Crazy Taxi`,
        gameId: '54629'
    },
    {
        answer: 'paper',
        id: 93,
        game: `Paper Mario`,
        gameId: '25178'
    },
    {
        answer: 'rogue',
        id: 94,
        game: `Rogue`,
        gameId: '55107'
    },
    {
        answer: 'crash',
        id: 95,
        game: `Crash Bandicoot`,
        gameId: '5488'
    },
    {
        answer: 'reach',
        id: 96,
        game: `Halo Reach`,
        gameId: '28613'
    },
    {
        answer: 'story',
        id: 97,
        game: `Cave Story`,
        gameId: '12850'
    },
    {
        answer: 'mafia',
        id: 98,
        game: `Mafia`,
        gameId: '442854'
    },
    {
        answer: 'worms',
        id: 99,
        game: `Worms`,
        gameId: '5383'
    },
    {
        answer: 'might',
        id: 100,
        game: `Heroes of Might and Magic III`,
        gameId: '22685'
    },
    {
        answer: 'solid',
        id: 101,
        game: 'Metal Gear Solid',
        gameId: '57607'
    },
    {
        answer: 'fates',
        id: 102,
        game: `Fire Emblem Fates`,
        gameId: '27998'
    },
    {
        answer: 'joust',
        id: 103,
        game: `Joust`,
        gameId: '28279'
    },
    {
        answer: 'turbo',
        id: 104,
        game: `Super Puzzle Fighter II Turbo`,
        gameId: '53590'
    },
    {
        answer: 'aegis',
        id: 105,
        game: `13 Sentinels Aegis Rim`,
        gameId: '408286'
    },
    {
        answer: 'outer',
        id: 106,
        game: `Outer Worlds`,
        gameId: '274762'
    },
    {
        answer: 'omega',
        id: 107,
        game: `Astro Boy: Omega Factor`,
        gameId: '53135'
    },
    {
        answer: 'alpha',
        id: 108,
        game: `Street Fighter Alpha 3`,
        gameId: '53570'
    },
    {
        answer: 'dozer',
        id: 109,
        game: `Drill Dozer`,
        gameId: '53266'
    },
    {
        answer: 'sword',
        id: 110,
        game: `Broken Sword`,
        gameId: '30766'
    },
    {
        answer: 'night',
        id: 111,
        game: `Summon Night Swordcraft Story 2`,
        gameId: '53573'
    },
    {
        answer: 'dodge',
        id: 112,
        game: `Super Dodge Ball Advance`,
        gameId: '53579'
    },
    {
        answer: 'hades',
        id: 113,
        game: `Hades`,
        gameId: '274755'
    },
    {
        answer: 'ultra',
        id: 114,
        game: `The Stanley Parable Ultra Deluxe`,
        gameId: '274758'
    },
    {
        answer: 'takes',
        id: 115,
        game: `It Takes Two`,
        gameId: '455597'
    },
    {
        answer: 'tales',
        id: 116,
        game: `Tales of Vesperia`,
        gameId: '272421'
    },
    {
        answer: 'fires',
        id: 117,
        game: `Armored Core VI Fires of Rubicon`,
        gameId: '892902'
    },
    {
        answer: 'tunic',
        id: 118,
        game: `Tunic`,
        gameId: '29236'
    },
    {
        answer: 'skies',
        id: 119,
        game: `Dragon Quest IX Sentinels of the Starry Skies`,
        gameId: '27038'
    },
    {
        answer: 'elite',
        id: 120,
        game: `Elite Beat Agents`,
        gameId: '25035'
    },
    {
        answer: 'devil',
        id: 121,
        game: `Shin Megami Tensei Devil Survivor`,
        gameId: '25976'
    },
    {
        answer: 'trick',
        id: 122,
        game: `Ghost Trick Phantom Detective`,
        gameId: '1317'
    },
    {
        answer: 'heist',
        id: 123,
        game: `SteamWorld Heist`,
        gameId: '1165'
    },
    {
        answer: 'elder',
        id: 124,
        game: `The Elder Scrolls IV Oblivion`,
        gameId: '5678'
    },
    {
        answer: 'saber',
        id: 125,
        game: `Beat Saber`,
        gameId: '58325'
    },
    {
        answer: 'lords',
        id: 126,
        game: `Myth The Fallen Lords`,
        gameId: '29768'
    },
    {
        answer: 'wrath',
        id: 127,
        game: `World of Warcraft Wrath of the Lich King`,
        gameId: '38218'
    },
    {
        answer: 'kings',
        id: 128,
        game: `Crusader Kings III`,
        gameId: '384567'
    },
    {
        answer: 'ninja',
        id: 129,
        game: `Mark of the Ninja`,
        gameId: '11974'
    },
    {
        answer: 'white',
        id: 130,
        game: `Black & White`,
        gameId: '32925'
    },
    {
        answer: 'cells',
        id: 131,
        game: `Dead Cells`,
        gameId: '11726'
    },
    {
        answer: 'spire',
        id: 132,
        game: `Slay the Spire`,
        gameId: '28121'
    },
    {
        answer: 'pizza',
        id: 133,
        game: `Pizza Tower`,
        gameId: '914795'
    },
    {
        answer: 'curse',
        id: 134,
        game: `The Curse of Monkey Island`,
        gameId: '30789'
    },
    {
        answer: 'wisps',
        id: 135,
        game: `Ori and the Will of the Wisps`,
        gameId: '28199'
    },
    {
        answer: 'abyss',
        id: 136,
        game: `Ultima Underworld The Stygian Abyss`,
        gameId: '30424'
    },
    {
        answer: 'tower',
        id: 137,
        game: `Pizza Tower`,
        gameId: '914795'
    },
    {
        answer: 'skies',
        id: 138,
        game: `Sunless Skies`,
        gameId: '12687'
    },
    {
        answer: 'death',
        id: 139,
        game: `Death Stranding`,
        gameId: '50738'
    },
    {
        answer: 'among',
        id: 140,
        game: `Among Us`,
        gameId: '356714'
    },
    {
        answer: 'stick',
        id: 141,
        game: `South Park The Stick of Truth`,
        gameId: '3757'
    },
    {
        answer: 'cross',
        id: 142,
        game: `Chrono Cross`,
        gameId: '52799'
    },
    {
        answer: 'night',
        id: 143,
        game: `Castlevania Symphony of the Night`,
        gameId: '52790'
    },
    {
        answer: 'story',
        id: 144,
        game: `Vagrant Story`,
        gameId: '57954'
    },
    {
        answer: 'skies',
        id: 145,
        game: `Skies of Arcadia`,
        gameId: '54744'
    },
    {
        answer: 'front',
        id: 146,
        game: `Front Mission III`,
        gameId: '52969'
    },
    {
        answer: 'lunar',
        id: 147,
        game: `Lunar: Silver Star Story`,
        gameId: '53099'
    },
    {
        answer: 'tales',
        id: 148,
        game: `Tales of Symphonia`,
        gameId: '3763'
    },
    {
        answer: 'light',
        id: 149,
        game: `Blue Reflection: Second Light`,
        gameId: '692596'
    },
    {
        answer: 'nexus',
        id: 150,
        game: `Scarlet Nexus`,
        gameId: '440086'
    },
    {
        answer: 'steel',
        id: 151,
        game: `Fuga: Melodies of Steel`,
        gameId: '638799'
    },
    {
        answer: 'dwarf',
        id: 152,
        game: `Dwarf Fortress`,
        gameId: '58209'
    },
    {
        answer: 'dogma',
        id: 153,
        game: `Dragons Dogma`,
        gameId: '4297'
    },
    {
        answer: 'ocean',
        id: 154,
        game: `Star Ocean 2`,
        gameId: '57800'
    },
    {
        answer: 'crypt',
        id: 155,
        game: `Crypt of the Necrodancer`,
        gameId: '2845'
    },
    {
        answer: 'brain',
        id: 156,
        game: `Dr Kawashimas Brain Training`,
        gameId: '399392'
    },
    {
        answer: 'speed',
        id: 157,
        game: `Need for Speed: Underground 2`,
        gameId: '53446'
    },
    {
        answer: 'diver',
        id: 158,
        game: `Dave the Diver`,
        gameId: '871264'
    },
    {
        answer: 'short',
        id: 159,
        game: `A Short Hike`,
        gameId: '304247'
    },
    {
        answer: 'exile',
        id: 160,
        game: `Myst III: Exile`,
        gameId: '59011'
    },
    {
        answer: 'doors',
        id: 161,
        game: `999: Nine Hours, Nine Persons, Nine Doors`,
        gameId: '58920'
    },
    {
        answer: 'rings',
        id: 162,
        game: `The Lord of the Rings: The Battle for Middle-earth 2`,
        gameId: '36900'
    },
    {
        answer: 'child',
        id: 163,
        game: `Child of Light`,
        gameId: '3647'
    },
    {
        answer: 'mania',
        id: 164,
        game: `Sonic Mania`,
        gameId: '23587'
    },
    {
        answer: 'watch',
        id: 165,
        game: `Watch Dogs`,
        gameId: '3687'
    },
    {
        answer: 'river',
        id: 166,
        game: `River City Girls 2`,
        gameId: '833438'
    },
    {
        answer: 'stray',
        id: 167,
        game: `Stray Gods: The Roleplaying Musical`,
        gameId: '962024'
    },
    {
        answer: 'woods',
        id: 168,
        game: `Night in the Woods`,
        gameId: '320'
    },
    {
        answer: 'daddy',
        id: 169,
        game: `Dream Daddy: A Dad Dating Simulator`,
        gameId: '29324'
    },
    {
        answer: 'gears',
        id: 170,
        game: `Gears Tactics`,
        gameId: '58762'
    },
    {
        answer: 'metro',
        id: 171,
        game: `Metro 2033 Redux`,
        gameId: '3603'
    },
    {
        answer: 'earth',
        id: 172,
        game: `Sid Meier's Civilization: Beyond Earth`,
        gameId: '13694'
    },
    {
        answer: 'bully',
        id: 173,
        game: `Bully`,
        gameId: '2634'
    },
    {
        answer: 'dirge',
        id: 174,
        game: `Dirge of Cerberus: Final Fantasy VII`,
        gameId: '267219'
    },
    {
        answer: 'truck',
        id: 175,
        game: `Euro Truck Simulator 2`,
        gameId: '9609'
    },
    {
        answer: 'where',
        id: 176,
        game: `Where in the World Is Carmen Sandiego?`,
        gameId: '34944'
    },
    {
        answer: 'mount',
        id: 177,
        game: `Mount & Blade`,
        gameId: '16813'
    },
    {
        answer: 'theme',
        id: 178,
        game: `Theme Park`,
        gameId: '22953'
    },
    {
        answer: 'spore',
        id: 179,
        game: `Spore`,
        gameId: '11425'
    },
    {
        answer: 'siege',
        id: 180,
        game: `Dungeon Siege`,
        gameId: '16144'
    },
    {
        answer: 'souls',
        id: 181,
        game: `Demons Souls`,
        gameId: '452648'
    },
    {
        answer: 'human',
        id: 182,
        game: `Detroit: Become Human`,
        gameId: '29177'
    },
    {
        answer: 'wrath',
        id: 183,
        game: `Ni no Kuni: Wrath of the White Witch`,
        gameId: '4128'
    },
    {
        answer: 'happy',
        id: 184,
        game: `Animal Crossing: Happy Home Designer`,
        gameId: '27986'
    },
    {
        answer: 'joker',
        id: 185,
        game: `Dragon Quest Monsters: Joker`,
        gameId: '25300'
    },
    {
        answer: 'party',
        id: 186,
        game: `Mario Party Superstars`,
        gameId: '622494'
    },
    {
        answer: 'power',
        id: 187,
        game: `Mario Power Tennis`,
        gameId: '27138'
    },
    {
        answer: 'dread',
        id: 188,
        game: `Metroid Dread`,
        gameId: '622495'
    },
    {
        answer: 'chain',
        id: 189,
        game: `Astral Chain`,
        gameId: '292843'
    },
    {
        answer: 'enter',
        id: 190,
        game: `Enter the Gungeon`,
        gameId: '2574'
    },
    {
        answer: 'human',
        id: 191,
        game: `Human: Fall Flat`,
        gameId: '13247'
    },
    {
        answer: 'piece',
        id: 192,
        game: `One Piece Odyssey`,
        gameId: '761343'
    },
    {
        answer: 'arise',
        id: 193,
        game: `Tales of Arise`,
        gameId: '326244'
    },
    {
        answer: 'steel',
        id: 194,
        game: `The Legend of Heroes: Trails of Cold Steel III`,
        gameId: '395971'
    },
    {
        answer: 'titan',
        id: 195,
        game: `Titan Quest`,
        gameId: '37751'
    },
    {
        answer: 'force',
        id: 196,
        game: `Freedom Force`,
        gameId: '19619'
    },
    {
        answer: 'queen',
        id: 197,
        game: `Ogre Battle: The March of the Black Queen`,
        gameId: '25830'
    },
    {
        answer: 'bride',
        id: 198,
        game: `Dragon Quest V: Hand of the Heavenly Bride`,
        gameId: '25823'
    },
    {
        answer: 'quest',
        id: 199,
        game: `Ultima IV: Quest of the Avatar`,
        gameId: '54122'
    },
    {
        answer: 'final',
        id: 200,
        game: `Final Fantasy XVI`,
        gameId: '494382'
    }
]



export default function GameWordle({onClickHome, user}) {

    const [newGuessText, setNewGuessText] = useState('')

    const [guesses, setGuesses] = useState([])

    const [isFinished, setIsFinished] = useState(false)
    const [isWon, setIsWon] = useState(false)

    const [gameAnswer, setGameAnswer] = useState(gameWordleAnswers[Math.floor(Math.random()* gameWordleAnswers.length)])

    const [countFromAPI, setCountFromAPI] = useState(null)
    const [selectedId, setSelectedId] = useState(gameAnswer.id)

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

    useEffect(() => {
        if(!isFinished){
            inputRef.current.focus()
        }
        

    }, [isFinished])




    function handleNewGame(){
        setNewGuessText('')
        setGuesses([])
        setIsFinished(false)
        setIsWon(false)
        setKeyboardColor({
            a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
        })
        let randomId = Math.floor(Math.random()* gameWordleAnswers.length)
        setGameAnswer(gameWordleAnswers[randomId])
        setSelectedId(randomId + 1)
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

    function handleSelectChange(e){
        setSelectedId(e.target.value)
        setNewGuessText('')
        setGuesses([])
        setIsFinished(false)
        setIsWon(false)
        setKeyboardColor({
            a: 'plain-key', b: 'plain-key', c: 'plain-key', d: 'plain-key', e: 'plain-key', f:'plain-key', g:'plain-key', h:'plain-key', i:'plain-key', j:'plain-key', k:'plain-key', l:'plain-key', m:'plain-key', n:'plain-key', o:'plain-key', p:'plain-key', q:'plain-key', r:'plain-key', s:'plain-key', t:'plain-key', u:'plain-key', v:'plain-key', w:'plain-key', x:'plain-key', y:'plain-key', z:'plain-key'
        })
        setGameAnswer(gameWordleAnswers[e.target.value - 1])
        inputRef.current.focus()
    }

    function gameIdSelect(selectedId){
        return <>
            <label >Game Number: </label>
            <select onChange={handleSelectChange} value={selectedId}>
                {gameWordleAnswers.map((answer, index) => {
                    return <option key={index}>{index + 1}</option>
                })}
            </select>
        </>
    }


    return <div className="game-wordle">
        <MainTitle user={user}/>
        <BackButton onClick={onClickHome}/>
        <h2>Video Game Word Guesser</h2>
        <button disabled={!isFinished} onClick={handleNewGame}>New Random Game</button>
        <button disabled={isFinished} onClick={handleGiveUp}>Give Up</button>
        <p>{`Guess the word! (Bonus challenge: Name a game with each guess)`}</p>
        {gameIdSelect(selectedId)}
        {user && <p>You have won {countFromAPI} times</p>}
        <p>{isWon && `Congratulations! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1)}!`}</p>
        <p>{(isFinished && !isWon) && `Too bad! The word was ${gameAnswer.answer[0].toUpperCase()}${gameAnswer.answer.substring(1).toLowerCase()}!`}</p>
        {isFinished && <DisplayGame gameId={gameAnswer.gameId} gameAnswerName={gameAnswer.game}/>}
        {guesses.map((guess, idx) => <WordleGuess key={idx} guess={guess} answer={gameAnswer.answer}/>)}
        {!isFinished && <WordleDuringInput text={newGuessText}/>}

        <input autoFocus ref={inputRef} value={newGuessText}  hidden={isFinished} onChange={handleChange} onKeyDown={handleEnter} type="text" />
        <span hidden={!(newGuessText.length === 5)} onClick={handleSymbolClick} className="enter-symbol">⏎</span>
        <WordleKeyboard keyboardColor={keyboardColor} onClick={onKeyboardClick}/>


    </div>
}