
export function blocStateTemplate(blocClassname: string, blocFilename: string): string {
    return `
part of '${blocFilename}_bloc.dart';

enum ${blocClassname}Status { initial, loading, success, failure }

class ${blocClassname}State extends Equatable {
  const ${blocClassname}State({
    required this.status,
    this.error,
  });

  final ${blocClassname}Status status;
  final String? error;

  @override
  List<Object?> get props => [status, error];

  ${blocClassname}State copyWith({
    ${blocClassname}Status? status,
    String? error,
  }) {
    return ${blocClassname}State(
      status: status ?? this.status,
      error: error,
    );
  }
}
`.trim();
}