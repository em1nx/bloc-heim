
export function blocEventsTemplate(blocClassname: string, blocFilename: string): string {
    return `
part of '${blocFilename}_bloc.dart';

abstract class ${blocClassname}Event extends Equatable {
  const ${blocClassname}Event();

  @override
  List<Object> get props => [];
}
`.trim();
}