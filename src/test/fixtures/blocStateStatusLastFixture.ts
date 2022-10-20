

export function blocStateStatusLastFixture(): string {
    return `
class AddOrderState extends Equatable {
  const AddOrderState({
    required this.newField,
    this.error,
    required this.status,
  });
  
  final bool newField;
  final String? error;
  final AddOrderStatus status;
  
  @override
  List<Object?> get props => [newField, error, status];
  
  AddOrderState copyWith({
    bool? newField,
    String? error,
    AddOrderStatus? status,
  }) {
    return AddOrderState(
      bool: newField ?? this.newField,
      error: error,
      status: status ?? this.status,
    );
  }
}  

`.trim();
}