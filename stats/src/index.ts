import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// DataReader 인터페이스를 만족하는 객체 만들기
const csvFileReader = new  CsvFileReader('football.csv');

// MatchReader의 인스턴스를 만들고 DataReader 인터페이스를 만족시키는 객체 넘기기
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for(let match of matchReader.matches) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
    manUnitedWins ++;
  }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    manUnitedWins ++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);