import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

// DataReader 인터페이스를 만족하는 객체 만들기
const csvFileReader = new  CsvFileReader('football.csv');

// MatchReader의 인스턴스를 만들고 DataReader 인터페이스를 만족시키는 객체 넘기기
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);