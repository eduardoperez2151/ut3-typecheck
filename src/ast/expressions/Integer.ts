import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { IntegerType } from '../../typechecker/types/IntegerType';

/**
  Representación de constantes numéricas o numerales.
*/
export class Integer implements Exp {

  value: number;

  constructor(value: number) {
    this.value = value;
  }

//  toString(): string {
  //  return `Numeral(${this.value})`;
  //}

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return IntegerType.getInstance();
  }
}