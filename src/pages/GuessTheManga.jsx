import { useEffect, useRef, useState } from "react";
import BackButton from "../components/BackButton";
import MainTitle from "../components/MainTitle";
import axios from "axios";
import CompareDetails from "../components/CompareDetails";
import './GuessTheManga.css'
import DisplayManga from "../components/DisplayManga";
import MangaSearchBar from "../components/MangaSearchBar";
import { getWinCounts, updateMangaGuessCount } from "../utils/updateGameCount";

const mangaAnswers = [
    {
        id: 1,
        manga: 'One Piece',
        mangaId: 'a1c7c817-4e59-43b7-9365-09675a149a6f'
    },
    {
        id: 2,
        manga: 'Golgo 13',
        mangaId: 'b3683a72-dedf-4981-ad2f-d8d1e597718d'
    },
    {
        id: 3,
        manga: 'Detective Conan',
        mangaId: '7f30dfc3-0b80-4dcc-a3b9-0cd746fac005'
    },
    {
        id: 4,
        manga: 'Dragon Ball',
        mangaId: '40bc649f-7b49-4645-859e-6cd94136e722'
    },
    {
        id: 5,
        manga: 'Doraemon',
        mangaId: 'e36da8b0-feca-46dd-9120-d5dc2f3feae8'
    },
    {
        id: 6,
        manga: 'Great Teacher Onizuka',
        mangaId: '02860cdf-1020-40f1-a23f-2025d80f6290'
    },
    {
        id: 7,
        manga: 'Grand Blue',
        mangaId: 'fffbfac3-b7ad-41ee-9581-b4d90ecec941'
    },
    {
        id: 9,
        manga: 'March comes in like a lion',
        mangaId: '0ca1627e-95dd-4118-892a-f144adf02256'
    },
    {
        id: 10,
        manga: 'witch hat atelier',
        mangaId: '67e7453b-9ee5-4ae5-9316-215b03e4a71d'
    },
    {
        id: 11,
        manga: 'A Silent Voice',
        mangaId: '4bde51e5-e420-45a4-98e9-7405bf2d59ff'
    },
    {
        id: 12,
        manga: 'Bungou Stray Dogs',
        mangaId: '3fba42cf-2ad6-4c30-a7ab-46cb8149208a'
    },
    {
        id: 13,
        manga: 'One Punch Man',
        mangaId: 'd8a959f7-648e-4c8d-8f23-f1f3f8e129f3'
    },
    {
        id: 14,
        manga: 'Shiori Experience: My Plain Self',
        mangaId: 'd58abdf4-9268-41d8-9920-f8fe8858a173'
    },
    {
        id: 15,
        manga: 'That Time I Got Reincarnated as a Slime',
        mangaId: 'e78a489b-6632-4d61-b00b-5206f5b8b22b'
    },
    {
        id: 16,
        manga: 'Naruto',
        mangaId: '6b1eb93e-473a-4ab3-9922-1a66d2a29a4a'
    },
    {
        id: 17,
        manga: 'Rebuild World',
        mangaId: '99182618-ae92-4aec-a5df-518659b7b613'
    },
    {
        id: 18,
        manga: 'Demon Slayer',
        mangaId: '789642f8-ca89-4e4e-8f7b-eee4d17ea08b'
    },
    {
        id: 19,
        manga: 'Astro Boy',
        mangaId: 'ca4c84bb-7272-45aa-a22d-dc1282b52372'
    },
    {
        id: 20,
        manga: 'Touch',
        mangaId: '36b4c3d4-629d-45cb-b911-ae0906f6b544'
    },
    {
        id: 21,
        manga: 'Tokyo Ghoul',
        mangaId: '6a1d1cb1-ecd5-40d9-89ff-9d88e40b136b'
    },
    {
        id: 22,
        manga: 'Dragon Quest Dai no Daiboken',
        mangaId: '3a3cfc32-357e-4b50-a660-5ce4b58dfcbc'
    },
    {
        id: 23,
        manga: 'Black butler',
        mangaId: '8bd19e5c-94f7-4368-a918-50f463857446'
    },
    {
        id: 24,
        manga: 'Death Note',
        mangaId: '75ee72ab-c6bf-4b87-badd-de839156934c'
    },
    {
        id: 25,
        manga: 'Magi: The Labyrinth of Magic',
        mangaId: 'ce63e6b8-fad8-48bc-a2aa-d801fb8d5d43'
    },
    {
        id: 26,
        manga: 'Steel Ball Run',
        mangaId: 'b30dfee3-9d1d-4e8d-bfbe-8fcabc3c96f6'
    },
    {
        id: 27,
        manga: 'Attack on Titan',
        mangaId: '304ceac3-8cdb-4fe7-acf7-2b6ff7a60613'
    },
    {
        id: 28,
        manga: 'Pluto',
        mangaId: 'e171c073-4415-499b-85bc-ea93825127ac'
    },
    {
        id: 29,
        manga: 'Akira',
        mangaId: '175cf215-2122-4656-9fac-37ac092438af'
    },
    {
        id: 30,
        manga: 'Fullmetal Alchemist',
        mangaId: 'dd8a907a-3850-4f95-ba03-ba201a8399e3'
    },
    {
        id: 31,
        manga: 'Fairy Tail',
        mangaId: '227e3f72-863f-46f9-bafe-c43104ca29ee'
    },
    {
        id: 32,
        manga: 'Major',
        mangaId: '491aba94-e971-4911-8a93-0b1200403f4b'
    },
    {
        id: 33,
        manga: 'Glass Mask',
        mangaId: '51fe4713-013a-4acc-8874-bfd01b60eff9'
    },
    {
        id: 34,
        manga: 'Slam Dunk',
        mangaId: '319df2e2-e6a6-4e3a-a31c-68539c140a84'
    },
    {
        id: 35,
        manga: 'Crest of the Royal Family',
        mangaId: 'a0861345-be1a-4f4d-97bb-6310b91cb32b'
    },
    {
        id: 36,
        manga: 'dr Slump',
        mangaId: '985e4ae6-7a36-42c5-ae12-f4291c58798c'
    },
    {
        id: 37,
        manga: 'A Certain Magical Index',
        mangaId: '229e5177-2e71-4642-bd56-a9b0b0ba0e60'
    },
    {
        id: 38,
        manga: 'Space Brothers',
        mangaId: 'a437129d-18e9-48d7-9484-9fb9b9073ddd'
    },
    {
        id: 39,
        manga: 'happy!',
        mangaId: 'd670572b-d21a-474c-a03d-7ec50bd53030'
    },
    {
        id: 40,
        manga: 'seven deadly sins',
        mangaId: 'e52d9403-3356-403b-b7bb-d7d6a420dd50'
    },
    {
        id: 41,
        manga: 'yowamushi pedal',
        mangaId: '003e7fbf-f047-4783-a7df-1533a2a653d4'
    },
    {
        id: 42,
        manga: 'angel heart',
        mangaId: '31be4cc4-d7c8-47d7-9d80-4f1b2db7979e'
    },
    {
        id: 43,
        manga: 'the fable',
        mangaId: '5209fe10-4a14-403f-8837-2ccf8cced253'
    },
    {
        id: 44,
        manga: 'fire force',
        mangaId: 'ec514ef4-fb77-43b9-b9b4-528229de1308'
    },
    {
        id: 45,
        manga: 'giant killing',
        mangaId: '3b6c3a0b-8752-41fc-9d3e-1310f6f28252'
    },
    {
        id: 46,
        manga: 'drops of god',
        mangaId: 'd9414237-832b-46a7-9fb4-1c66f4b97736'
    },
    {
        id: 47,
        manga: 'fire punch',
        mangaId: '6fef1f74-a0ad-4f0d-99db-d32a7cd24098'
    },
    {
        id: 48,
        manga: 'wotakoi',
        mangaId: '65263bf9-4f87-4513-b72f-ad6436b3911c'
    },
    {
        id: 49,
        manga: 'made in abyss',
        mangaId: '80422e14-b9ad-4fda-970f-de370d5fa4e5'
    },
    {
        id: 50,
        manga: 'Dr. Stone',
        mangaId: 'cfc3d743-bd89-48e2-991f-63e680cc4edf'
    },
    {
        id: 51,
        manga: 'Jojos bizzare adventure stone ocean',
        mangaId: 'ea57752d-acb7-469e-aa60-43e694ded9a9'
    },
    {
        id: 52,
        manga: 'Fist of the North Star',
        mangaId: '75251a47-952c-4e38-b1c6-3572b9bfd481'
    },
    {
        id: 53,
        manga: 'Spice and Wolf',
        mangaId: 'de900fd3-c94c-4148-bbcb-ca56eaeb57a4'
    },
    {
        id: 54,
        manga: 'cardcaptor sakura clear card',
        mangaId: '78218ec5-b7ea-4c03-accd-df98c3d8e350'
    },
    {
        id: 55,
        manga: 'high score girl',
        mangaId: 'a59ec084-aed4-4a49-abc1-ae08cf7a9aa7'
    },
    {
        id: 56,
        manga: 'baby steps',
        mangaId: 'c433f163-d610-49ba-a031-a1f3b6377af2'
    },
    {
        id: 57,
        manga: 'soul eater',
        mangaId: '53ef1720-7a5d-40ad-90b0-2f9ca0a1ab01'
    },
    {
        id: 58,
        manga: 'Detroit Metal City',
        mangaId: '087e1ee7-491e-4e67-b3c2-44d227cb0584'
    },
    {
        id: 59,
        manga: 'My dress up darling',
        mangaId: 'aa6c76f7-5f5f-46b6-a800-911145f81b9b'
    },
    {
        id: 60,
        manga: 'densha otoko',
        mangaId: '7b514e78-ce00-44c2-aa6f-718e17f782f2'
    },
    {
        id: 61,
        manga: 'Boys Over Flowers',
        mangaId: '4c2b7c0d-f97b-4044-b94a-638d99e92d24'
    },
    {
        id: 62,
        manga: 'Initial D',
        mangaId: '21f54bc1-aefd-4be1-8284-5858b1df0e55'
    },
    {
        id: 63,
        manga: 'Inuyasha',
        mangaId: '279c2494-8f85-4e5b-8bfb-a3223441fd13'
    },
    {
        id: 64,
        manga: '20th Century Boys',
        mangaId: 'ad06790a-01e3-400c-a449-0ec152d6756a'
    },
    {
        id: 65,
        manga: 'Urusei Yatsura',
        mangaId: '6b9206b3-5c0f-4cf8-a0cc-d2c9e1aa4df9'
    },
    {
        id: 66,
        manga: 'Spy x Family',
        mangaId: '6b958848-c885-4735-9201-12ee77abcb3c'
    },
    {
        id: 67,
        manga: 'Chihayafuru',
        mangaId: 'd7d5f269-6969-4f86-af89-ee57a6180f36'
    }
]

// const mangaAnswers = [
//     {
//         answer: 'guild',
//         id: 1,
//         manga: `I May Be a Guild Receptionist, but I'll Solo Any Boss to Clock Out on Time`,
//         mangaId: '3b9bade6-28a0-4f2f-8211-4b5106a2cbbd'
//     },
//     {
//         answer: 'piece',
//         id: 2,
//         manga: 'One Piece',
//         mangaId: 'a1c7c817-4e59-43b7-9365-09675a149a6f'
//     },
//     {
//         answer: 'great',
//         id: 3,
//         manga: 'Great Teacher Onizuka',
//         mangaId: '02860cdf-1020-40f1-a23f-2025d80f6290'
//     },
//     {
//         answer: 'grand',
//         id: 4,
//         manga: 'Grand Blue',
//         mangaId: 'fffbfac3-b7ad-41ee-9581-b4d90ecec941'
//     },
//     {
//         answer: 'march',
//         id: 5,
//         manga: 'March comes in like a lion',
//         mangaId: '0ca1627e-95dd-4118-892a-f144adf02256'
//     },
//     {
//         answer: 'witch',
//         id: 6,
//         manga: 'witch hat atelier',
//         mangaId: '67e7453b-9ee5-4ae5-9316-215b03e4a71d'
//     },
//     {
//         answer: 'voice',
//         id: 7,
//         manga: 'A Silent Voice',
//         mangaId: '4bde51e5-e420-45a4-98e9-7405bf2d59ff'
//     },
//     {
//         answer: 'stray',
//         id: 8,
//         manga: 'Bungou Stray Dogs',
//         mangaId: '3fba42cf-2ad6-4c30-a7ab-46cb8149208a'
//     },
//     {
//         answer: 'punch',
//         id: 9,
//         manga: 'One Punch Man',
//         mangaId: 'd8a959f7-648e-4c8d-8f23-f1f3f8e129f3'
//     },
//     {
//         answer: 'plain',
//         id: 10,
//         manga: 'Shiori Experience: My Plain Self',
//         mangaId: 'd58abdf4-9268-41d8-9920-f8fe8858a173'
//     },
//     {
//         answer: 'slime',
//         id: 11,
//         manga: 'That Time I Got Reincarnated as a Slime',
//         mangaId: 'e78a489b-6632-4d61-b00b-5206f5b8b22b'
//     },
//     {
//         answer: 'world',
//         id: 12,
//         manga: 'Rebuild World',
//         mangaId: '99182618-ae92-4aec-a5df-518659b7b613'
//     },
//     {
//         answer: 'demon',
//         id: 13,
//         manga: 'Demon Slayer',
//         mangaId: '789642f8-ca89-4e4e-8f7b-eee4d17ea08b'
//     },
//     {
//         answer: 'astro',
//         id: 14,
//         manga: 'Astro Boy',
//         mangaId: 'ca4c84bb-7272-45aa-a22d-dc1282b52372'
//     },
//     {
//         answer: 'touch',
//         id: 15,
//         manga: 'Touch',
//         mangaId: '36b4c3d4-629d-45cb-b911-ae0906f6b544'
//     },
//     {
//         answer: 'ghoul',
//         id: 16,
//         manga: 'Tokyo Ghoul',
//         mangaId: '6a1d1cb1-ecd5-40d9-89ff-9d88e40b136b'
//     },
//     {
//         answer: 'quest',
//         id: 17,
//         manga: 'Dragon Quest Dai no Daiboken',
//         mangaId: '3a3cfc32-357e-4b50-a660-5ce4b58dfcbc'
//     },
//     {
//         answer: 'black',
//         id: 18,
//         manga: 'Black butler',
//         mangaId: '8bd19e5c-94f7-4368-a918-50f463857446'
//     },
//     {
//         answer: 'death',
//         id: 19,
//         manga: 'Death Note',
//         mangaId: '75ee72ab-c6bf-4b87-badd-de839156934c'
//     },
//     {
//         answer: 'flame',
//         id: 20,
//         manga: 'Flame of Recca',
//         mangaId: 'fd3db4be-b2d0-41ab-895b-de5dc99b4f9d'
//     },
//     {
//         answer: 'magic',
//         id: 21,
//         manga: 'Magi: The Labyrinth of Magic',
//         mangaId: 'ce63e6b8-fad8-48bc-a2aa-d801fb8d5d43'
//     },
//     {
//         answer: 'steel',
//         id: 22,
//         manga: 'Steel Ball Run',
//         mangaId: 'b30dfee3-9d1d-4e8d-bfbe-8fcabc3c96f6'
//     },
//     {
//         answer: 'titan',
//         id: 23,
//         manga: 'Attack on Titan',
//         mangaId: '304ceac3-8cdb-4fe7-acf7-2b6ff7a60613'
//     },
//     {
//         answer: 'pluto',
//         id: 24,
//         manga: 'Pluto',
//         mangaId: 'e171c073-4415-499b-85bc-ea93825127ac'
//     },
//     {
//         answer: 'akira',
//         id: 25,
//         manga: 'Akira',
//         mangaId: '175cf215-2122-4656-9fac-37ac092438af'
//     },
//     {
//         answer: 'stone',
//         id: 26,
//         manga: 'Dr. Stone',
//         mangaId: 'cfc3d743-bd89-48e2-991f-63e680cc4edf'
//     },
//     {
//         answer: 'ocean',
//         id: 27,
//         manga: 'Jojos bizzare adventure stone ocean',
//         mangaId: 'ea57752d-acb7-469e-aa60-43e694ded9a9'
//     },
//     {
//         answer: 'north',
//         id: 28,
//         manga: 'Fist of the North Star',
//         mangaId: '75251a47-952c-4e38-b1c6-3572b9bfd481'
//     },
//     {
//         answer: 'conan',
//         id: 29,
//         manga: 'Detective Conan',
//         mangaId: '7f30dfc3-0b80-4dcc-a3b9-0cd746fac005'
//     },
//     {
//         answer: 'metal',
//         id: 30,
//         manga: 'Fullmetal Alchemist',
//         mangaId: 'dd8a907a-3850-4f95-ba03-ba201a8399e3'
//     },
//     {
//         answer: 'fairy',
//         id: 31,
//         manga: 'Fairy Tail',
//         mangaId: '227e3f72-863f-46f9-bafe-c43104ca29ee'
//     },
//     {
//         answer: 'major',
//         id: 32,
//         manga: 'Major',
//         mangaId: '491aba94-e971-4911-8a93-0b1200403f4b'
//     },
//     {
//         answer: 'glass',
//         id: 33,
//         manga: 'Glass Mask',
//         mangaId: '51fe4713-013a-4acc-8874-bfd01b60eff9'
//     },
//     {
//         answer: 'saint',
//         id: 34,
//         manga: 'Saint Seiya',
//         mangaId: '67bc662a-dba4-4616-9da0-fa0e18e87383'
//     },
//     {
//         answer: 'crest',
//         id: 35,
//         manga: 'Crest of the Royal Family',
//         mangaId: 'a0861345-be1a-4f4d-97bb-6310b91cb32b'
//     },
//     {
//         answer: 'slump',
//         id: 36,
//         manga: 'dr Slump',
//         mangaId: '985e4ae6-7a36-42c5-ae12-f4291c58798c'
//     },
//     {
//         answer: 'index',
//         id: 37,
//         manga: 'A Certain Magical Index',
//         mangaId: '229e5177-2e71-4642-bd56-a9b0b0ba0e60'
//     },
//     {
//         answer: 'space',
//         id: 38,
//         manga: 'Space Brothers',
//         mangaId: 'a437129d-18e9-48d7-9484-9fb9b9073ddd'
//     },
//     {
//         answer: 'happy',
//         id: 39,
//         manga: 'happy!',
//         mangaId: 'd670572b-d21a-474c-a03d-7ec50bd53030'
//     },
//     {
//         answer: 'seven',
//         id: 40,
//         manga: 'seven deadly sins',
//         mangaId: 'e52d9403-3356-403b-b7bb-d7d6a420dd50'
//     },
//     {
//         answer: 'pedal',
//         id: 41,
//         manga: 'yowamushi pedal',
//         mangaId: '003e7fbf-f047-4783-a7df-1533a2a653d4'
//     },
//     {
//         answer: 'heart',
//         id: 42,
//         manga: 'angel heart',
//         mangaId: '31be4cc4-d7c8-47d7-9d80-4f1b2db7979e'
//     },
//     {
//         answer: 'fable',
//         id: 43,
//         manga: 'the fable',
//         mangaId: '5209fe10-4a14-403f-8837-2ccf8cced253'
//     },
//     {
//         answer: 'force',
//         id: 44,
//         manga: 'fire force',
//         mangaId: 'ec514ef4-fb77-43b9-b9b4-528229de1308'
//     },
//     {
//         answer: 'giant',
//         id: 45,
//         manga: 'giant killing',
//         mangaId: '3b6c3a0b-8752-41fc-9d3e-1310f6f28252'
//     },
//     {
//         answer: 'drops',
//         id: 46,
//         manga: 'drops of god',
//         mangaId: 'd9414237-832b-46a7-9fb4-1c66f4b97736'
//     },
//     {
//         answer: 'punch',
//         id: 47,
//         manga: 'fire punch',
//         mangaId: '6fef1f74-a0ad-4f0d-99db-d32a7cd24098'
//     },
//     {
//         answer: 'otaku',
//         id: 48,
//         manga: 'wotakoi',
//         mangaId: '65263bf9-4f87-4513-b72f-ad6436b3911c'
//     },
//     {
//         answer: 'abyss',
//         id: 49,
//         manga: 'made in abyss',
//         mangaId: '80422e14-b9ad-4fda-970f-de370d5fa4e5'
//     },
//     {
//         answer: 'given',
//         id: 50,
//         manga: 'given',
//         mangaId: '039d717e-9690-47fd-944d-93161b97fbac'
//     },
//     {
//         answer: 'cross',
//         id: 51,
//         manga: 'cross game',
//         mangaId: '8bd288e6-7c5a-403a-b5b6-a845a70ca376'
//     },
//     {
//         answer: 'giant',
//         id: 52,
//         manga: 'blue giant',
//         mangaId: '1090afe3-3b91-4325-a9b4-d92875aa815e'
//     },
//     {
//         answer: 'house',
//         id: 53,
//         manga: 'Radiation house',
//         mangaId: '96338481-0531-4a25-b209-152e4178684b'
//     },
//     {
//         answer: 'dance',
//         id: 54,
//         manga: 'SKET dance',
//         mangaId: '566eb93d-5958-44ca-b9d3-a8335bfead5a'
//     },
//     {
//         answer: 'bride',
//         id: 55,
//         manga: 'The ancient magus bride',
//         mangaId: '195023bf-cf9a-4772-94ef-09dd6eddea84'
//     },
//     {
//         answer: 'angel',
//         id: 56,
//         manga: 'Angel Densetsu',
//         mangaId: 'e1b7fb5c-dc71-4727-8086-5d89e144091f'
//     },
//     {
//         answer: 'black',
//         id: 57,
//         manga: 'black lagoon',
//         mangaId: '6da0b34b-db19-491a-b85c-6e31e0986f15'
//     },
//     {
//         answer: 'seeds',
//         id: 58,
//         manga: '7 seeds',
//         mangaId: 'ce47b821-988c-4abf-a8dd-864cef84585a'
//     },
//     {
//         answer: 'spice',
//         id: 59,
//         manga: 'Spice and Wolf',
//         mangaId: 'de900fd3-c94c-4148-bbcb-ca56eaeb57a4'
//     },
//     {
//         answer: 'clear',
//         id: 60,
//         manga: 'cardcaptor sakura clear card',
//         mangaId: '78218ec5-b7ea-4c03-accd-df98c3d8e350'
//     },
//     {
//         answer: 'score',
//         id: 61,
//         manga: 'high score girl',
//         mangaId: 'a59ec084-aed4-4a49-abc1-ae08cf7a9aa7'
//     },
//     {
//         answer: 'steps',
//         id: 62,
//         manga: 'baby steps',
//         mangaId: 'c433f163-d610-49ba-a031-a1f3b6377af2'
//     },
//     {
//         answer: 'eater',
//         id: 63,
//         manga: 'soul eater',
//         mangaId: '53ef1720-7a5d-40ad-90b0-2f9ca0a1ab01'
//     },
//     {
//         answer: 'blast',
//         id: 64,
//         manga: 'sayuki reload blast',
//         mangaId: '09aa712c-1457-4779-b2a0-877099a4c0e2'
//     },
//     {
//         answer: 'rough',
//         id: 65,
//         manga: 'rough',
//         mangaId: '7cdc3e9a-e948-4bd6-9b57-e7fc4e92df63'
//     },
//     {
//         answer: 'hotel',
//         id: 66,
//         manga: 'voynich hotel',
//         mangaId: 'f75812e9-27bb-44d5-9cb1-25de07ceb326'
//     },
//     {
//         answer: 'metal',
//         id: 67,
//         manga: 'Detroit Metal City',
//         mangaId: '087e1ee7-491e-4e67-b3c2-44d227cb0584'
//     },
//     {
//         answer: 'dress',
//         id: 68,
//         manga: 'My dress up darling',
//         mangaId: 'aa6c76f7-5f5f-46b6-a800-911145f81b9b'
//     },
//     {
//         answer: 'harem',
//         id: 69,
//         manga: 'giji harem',
//         mangaId: 'd8f9afe2-aa44-4bc6-9145-eebb1f282372'
//     },
//     {
//         answer: 'sword',
//         id: 70,
//         manga: 'sword art online',
//         mangaId: '3dd0b814-23f4-4342-b75b-f206598534f6'
//     },
//     {
//         answer: 'black',
//         id: 71,
//         manga: 'black cat',
//         mangaId: 'b8627f53-f262-49dc-ad4a-89e8f15baa47'
//     },
//     {
//         answer: 'tokyo',
//         id: 72,
//         manga: 'tokyo revengers',
//         mangaId: '59b36734-f2d6-46d7-97c0-06cfd2380852'
//     },
//     {
//         answer: 'books',
//         id: 73,
//         manga: 'ascendence of a bookworm',
//         mangaId: 'c0ad8919-4646-4a61-adf9-0fd6d8612efa'
//     },
//     {
//         answer: 'train',
//         id: 74,
//         manga: 'densha otoko',
//         mangaId: '7b514e78-ce00-44c2-aa6f-718e17f782f2'
//     },
//     {
//         answer: 'witch',
//         id: 75,
//         manga: 'flying witch',
//         mangaId: 'f7f430ab-2c24-49d3-b698-c9ff4787805b'
//     },
//     {
//         answer: 'uncle',
//         id: 76,
//         manga: 'isekai ojisan',
//         mangaId: 'd8f1d7da-8bb1-407b-8be3-10ac2894d3c6'
//     },
//     {
//         answer: 'lucky',
//         id: 77,
//         manga: 'lucky star',
//         mangaId: '31fbb1af-3df1-496e-992f-b7f96a34d1ab'
//     },
//     {
//         answer: 'saint',
//         id: 78,
//         manga: 'saint young men',
//         mangaId: 'e1d6dd1c-5ceb-44f7-bfe6-f74199288b07'
//     },
//     {
//         answer: 'candy',
//         id: 79,
//         manga: 'candy candy',
//         mangaId: '0b2beaa6-08df-44e5-a404-ecee109744fc'
//     },
//     {
//         answer: 'seven',
//         id: 80,
//         manga: 'Eureka Seven',
//         mangaId: '5353b1d5-ceec-40d7-b025-2690a6108b72'
//     },
//     {
//         answer: 'break',
//         id: 81,
//         manga: 'Break Blade',
//         mangaId: 'cc70ba46-e0d4-4240-98ba-adb86c82ff6b'
//     },
//     {
//         answer: 'peace',
//         id: 82,
//         manga: 'Peace Maker',
//         mangaId: '2679b5bc-63de-4009-a273-08ccdea73d38'
//     },
//     {
//         answer: 'seven',
//         id: 83,
//         manga: 'trinity seven',
//         mangaId: '12ac16ec-8894-420b-bc03-eade9340dfd8'
//     },
//     {
//         answer: 'blade',
//         id: 84,
//         manga: 'break blade',
//         mangaId: 'cc70ba46-e0d4-4240-98ba-adb86c82ff6b'
//     },
//     {
//         answer: 'magic',
//         id: 85,
//         manga: 'Magic Knight Rayearth',
//         mangaId: '20331b71-1d3f-4aed-b990-e54298424488'
//     },
//     {
//         answer: 'devil',
//         id: 86,
//         manga: 'Defense Devil',
//         mangaId: '3e11670e-1e34-4d67-8dea-a40ee6b73c6c'
//     },
//     {
//         answer: 'beast',
//         id: 87,
//         manga: 'Beast Complex',
//         mangaId: 'cd9b65e3-b9e2-4d8b-b9dd-0bc8be59f312'
//     },
//     {
//         answer: 'japan',
//         id: 88,
//         manga: 'yakitate japan',
//         mangaId: '0c29ce86-04c7-45cb-b623-70510b2064e3'
//     }
    
// ]

export default function GuessTheManga({onClickHome, user}) {

    const [gameAnswer, setGameAnswer] = useState(mangaAnswers[Math.floor(Math.random()* mangaAnswers.length)])

    const [answerDetails, setAnswerDetails] = useState(null)

    const [guesses, setGuesses] = useState([])

    const [isFinished, setIsFinished] = useState(false)
    const [isWon, setIsWon] = useState(false)

    const [searchText, setSearchText] = useState('')
    const [isMangaSelected, setIsMangaSelected] = useState(false)

    const [countFromAPI, setCountFromAPI] = useState(null)

    const inputRef = useRef(null)


    useEffect(() => {

        axios.get(`https://api.mangadex.org/manga/${gameAnswer.mangaId}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
            .then(res => {

                setAnswerDetails(res.data)
                console.log(res.data)
            })
 

    }, [gameAnswer])

    useEffect(() => {
        if (user) {
            getWinCounts()
                .then(res => {
                    setCountFromAPI(res.data.guessWins)
                })
        }

    }, [user])

    useEffect(() => {
        if (!isFinished) {
            inputRef.current.focus()
        }

    }, [isFinished])

    let title 
    let authors
    let artists

    let publicationDemographic
    let status
    let year
    let theme
    let genre

    if (answerDetails) {
        title = answerDetails.data.attributes.title.en
        authors = answerDetails.data.relationships
            .filter(relationship => relationship.type === 'author')
            .map(relationship => relationship.attributes.name)

        artists = answerDetails.data.relationships
        .filter(relationship => relationship.type === 'artist')
        .map(relationship => relationship.attributes.name)



        publicationDemographic = answerDetails.data.attributes.publicationDemographic
        if (publicationDemographic === null) {
            publicationDemographic = 'n/a'
        }
        status = answerDetails.data.attributes.status
        year = answerDetails.data.attributes.year
            
        theme = answerDetails.data.attributes.tags
        .filter(tag => tag.type === 'tag')
        .filter(tag => tag.attributes.group === 'theme')
        .map(tag => tag.attributes.name.en)

        genre = answerDetails.data.attributes.tags
        .filter(tag => tag.type === 'tag')
        .filter(tag => tag.attributes.group === 'genre')
        .map(tag => tag.attributes.name.en)
    }



    function handleNewGame() {
        setGuesses([])
        setIsFinished(false)
        setIsWon(false)
        setGameAnswer(mangaAnswers[Math.floor(Math.random()* mangaAnswers.length)])
        setSearchText('')
        setIsMangaSelected(false)
    }

    async function handleWin(){
        setIsFinished(true)
        setIsWon(true)
        if(user) {
            await updateMangaGuessCount(user.username)
            setCountFromAPI(countFromAPI + 1)
        }
    }

    function handleGiveUp(){
        setIsFinished(true)
        if (guesses.indexOf(gameAnswer.mangaId) === -1){
            setGuesses([...guesses, gameAnswer.mangaId])
        }
    }

    function submitGuess(newGuessId){
        if (guesses.indexOf(newGuessId) === -1){
            setGuesses([...guesses, newGuessId])
        }
        if (newGuessId === gameAnswer.mangaId){
            handleWin()
        }
    }

    function updateSearchText(text){
        setSearchText(text)
    }

    function onSelectManga(){
        setIsMangaSelected(true)
    }

    function onUnSelectManga(){
        setIsMangaSelected(false)
    }




    return <div>
        <MainTitle user={user}/>
        <BackButton onClick={onClickHome}/>
        <h2>Guess The Manga</h2>
        <button disabled={!isFinished} onClick={handleNewGame}>New Game</button>
        <button disabled={isFinished} onClick={handleGiveUp}>Give up</button>
        <p>What manga am I thinking of?</p>
        {user ? <p>You have won {countFromAPI} times</p> : false}
        <p>{isWon && `Congratulations! The manga was ${title}!`}</p>
        <p>{(isFinished && !isWon) && `Too bad! The manga was ${title}!`}</p>
        <div hidden={isFinished}>
            <MangaSearchBar onSubmit={submitGuess} searchText={searchText} isMangaSelected={isMangaSelected} updateSearchText={updateSearchText} onSelectManga={onSelectManga} onUnSelectManga={onUnSelectManga} inputRef={inputRef}/>
        </div>

        {isFinished && <DisplayManga mangaId={gameAnswer.mangaId}/>}
        
        <div className="guesses-wrapper">
            {guesses.length > 0 && <section className="guesses">
                <div>Title</div>
                <div>Authors</div>
                <div>Artists</div>
                <div>Demographic</div>
                <div>Status</div>
                <div>Publication Year</div>
                <div>Genres</div>
                <div>Themes</div>
                {[...guesses].reverse().map((guess, idx) =>  <CompareDetails key={guess} guessId={guess} title={title} authors={authors} artists={artists} publicationDemographic={publicationDemographic} status={status} year={year} theme={theme} genre={genre}/>)}
            </section>}
        </div>
        


    </div>
}