import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

//staic method로 접근
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);