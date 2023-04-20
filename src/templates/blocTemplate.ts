
export function blocTemplate(blocClassname: string, blocFilename: string): string {
    return `
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';

part '${blocFilename}_events.dart';
part '${blocFilename}_state.dart';

class ${blocClassname}Bloc extends Bloc<${blocClassname}Event, ${blocClassname}State> {
  ${blocClassname}Bloc()
      : super(const ${blocClassname}State(
          status: ${blocClassname}Status.initial,
        )) {
    // TODO: implement event handlers
  }
}
`.trim();
}