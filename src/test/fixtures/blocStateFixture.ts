

export function blocStateFixture(): string {
    return `
part of 'add_order_bloc.dart';

enum AddOrderStatus { initial, loading, success, failure }

class RandomClass1 {
  const RandomClass1();
}

class AddOrderState extends Equatable {
  const AddOrderState({
    required this.status,
    this.error = '',
  });

  final AddOrderStatus status;
  final String error;
  
  @override
  List<Object?> get props => [status, error];

  AddOrderState copyWith({
    AddOrderStatus? status,
    String? error,
  }) {
    return AddOrderState(
      status: status ?? this.status,
      error: error ?? this.error,
    );
  }
}  

class RandomClass2 {
  const RandomClass2();
}

`.trim();
}