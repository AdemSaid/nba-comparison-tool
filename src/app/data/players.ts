// src/data/players.ts

export interface Player {
    id: number;
    name: string;
    team: string;
    position: string;
    height: string;
    weight: string;
    ppg: number;
    rpg: number;
    apg: number;
  }
  
  export const players: Player[] = [
    {
      id: 1,
      name: 'LeBron James',
      team: 'Los Angeles Lakers',
      position: 'SF',
      height: '6\'9"',
      weight: '250 lbs',
      ppg: 27.2,
      rpg: 7.5,
      apg: 7.3
    },
    {
      id: 2,
      name: 'Kevin Durant',
      team: 'Phoenix Suns',
      position: 'PF',
      height: '6\'10"',
      weight: '240 lbs',
      ppg: 27.3,
      rpg: 7.1,
      apg: 4.3
    },
    {
      id: 3,
      name: 'Stephen Curry',
      team: 'Golden State Warriors',
      position: 'PG',
      height: '6\'3"',
      weight: '185 lbs',
      ppg: 24.6,
      rpg: 4.7,
      apg: 6.5
    },
    {
      id: 4,
      name: 'Kyrie Irving',
      team: 'Dallas Mavericks',
      position: 'PG',
      height: '6\'3"',
      weight: '190 lbs',
      ppg: 27.1,
      rpg: 4.9,
      apg: 5.7
    },
    {
      id: 5,
      name: 'Nikola Jokic',
      team: 'Denver Nuggets',
      position: 'C',
      height: '7\'0"',
      weight: '280 lbs',
      ppg: 25.4,
      rpg: 10.8,
      apg: 8.3
    },
    {
      id: 6,
      name: 'Joel Embiid',
      team: 'Philadelphia 76ers',
      position: 'C',
      height: '6\'11"',
      weight: '280 lbs',
      ppg: 28.5,
      rpg: 10.6,
      apg: 3.7
    },
    {
      id: 7,
      name: 'Luka Doncic',
      team: 'Dallas Mavericks',
      position: 'PG',
      height: '6\'7"',
      weight: '215 lbs',
      ppg: 28.9,
      rpg: 8.8,
      apg: 8.7
    },
    {
      id: 8,
      name: 'Giannis Antetokounmpo',
      team: 'Milwaukee Bucks',
      position: 'PF',
      height: '6\'11"',
      weight: '242 lbs',
      ppg: 29.5,
      rpg: 11.8,
      apg: 5.8
    },
    {
      id: 9,
      name: 'Anthony Davis',
      team: 'Los Angeles Lakers',
      position: 'PF',
      height: '6\'10"',
      weight: '253 lbs',
      ppg: 26.1,
      rpg: 9.3,
      apg: 3.2
    },
    {
      id: 10,
      name: 'James Harden',
      team: 'Philadelphia 76ers',
      position: 'SG',
      height: '6\'5"',
      weight: '220 lbs',
      ppg: 24.5,
      rpg: 5.1,
      apg: 6.1
    }
  ];