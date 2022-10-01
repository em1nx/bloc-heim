

export function blocStateStatusMiddleFixture(): string {
    return `
class AddOrderState extends Equatable {
  const AddOrderState({
    required this.newField,
    required this.status,
    this.error = '',
  });
  
  final bool newField;
  final AddOrderStatus status;
  final String error;
  
  @override
  List<Object?> get props => [newField, status, error];
  
  AddOrderState copyWith({
    bool? newField,
    AddOrderStatus? status,
    String? error,
  }) {
    return AddOrderState(
      bool: newField ?? this.newField,
      status: status ?? this.status,
      error: error ?? this.error,
    );
  }
}  
`.trim();
}