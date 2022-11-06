
interface FixtureArguments {
  nullableProps?: boolean,
  propsAsTable?: boolean,
  errorField?: boolean,
  randomClasses?: boolean,
}

export function blocStateFixture(args?: FixtureArguments): string {
    args = {
      nullableProps: args?.nullableProps ?? true,
      propsAsTable: args?.propsAsTable ?? false,
      errorField: args?.errorField ?? true,
      randomClasses: args?.randomClasses ?? true,
    };

    return `
part of 'add_order_bloc.dart';

enum TestStatus { initial, loading, success, failure }
${args.randomClasses ? randomClass(1) : ''}
class TestState extends Equatable {
  const TestState({
    required this.status,
    this.innerProp1,
    ${args.errorField ? "this.error," : ''}
  });
  
  final TestStatus status;
  final String? innerProp1;
  ${args.errorField ? "final String? error;" : ''}
  
  @override
  ${props(args)}
  
  TestState copyWith({
    TestStatus? status,
    String? innerProp1,
    ${args.errorField ? "String? error," : ''}
  }) {
    return TestState(
      status: status ?? this.status,
      innerProp1: innerProp1 ?? this.innerProp1,
      ${args.errorField ? "error: error," : ""}
    );
  }
}  
${args.randomClasses ? randomClass(2) : ''}
`.trim();
}


function props(args: FixtureArguments) {
  let {nullableProps, propsAsTable, errorField} = args;
  if (propsAsTable) {
    return `
List<Object${nullableProps ? '?' : ''}> get props => [
  status,
  innerProp1,
  ${errorField ? "error," : ''}
];`.trim();
  } 
  else {
    return `List<Object${nullableProps ? '?' : ''}> get props => [status, innerProp1${errorField ? ', error' : ''}];`;
  }   
}


function randomClass(id: number) {
  let classCode = `
class RandomClass${id} {
  const RandomClass${id}();
}`.trim();
  return `\n${classCode}\n`;
}