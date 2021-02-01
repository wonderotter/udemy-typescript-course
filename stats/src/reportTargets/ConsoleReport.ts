import { OuputTarget } from '../Summary';

export class ConsoleReport implements OuputTarget {

  print(report: string): void {
    console.log(report);
  } 
}