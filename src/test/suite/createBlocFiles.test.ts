import * as assert from 'assert';

import { commands, Uri } from 'vscode';
import * as os from 'os';
import * as fs from 'fs';
import { TextDecoder } from 'util';
import { createBlocFiles } from '../../utils';

suite('createBlocFiles Test Suite', () => {
	const tmpdir = os.tmpdir();
	const decoder = new TextDecoder();

	test('Bloc files created check', async () => {
		await createBlocFiles(tmpdir, 'my_test', 'MyTest');
		assert.strictEqual(fs.existsSync(tmpdir + '/my_test_bloc.dart'),  true, 'my_test_bloc.dart');
		assert.strictEqual(fs.existsSync(tmpdir + '/my_test_state.dart'),  true, 'my_test_state.dart');
		assert.strictEqual(fs.existsSync(tmpdir + '/my_test_events.dart'),  true, 'my_test_events.dart');
	});

	test('Main file code check', async () => {
    await createBlocFiles(tmpdir, 'my_test', 'MyTest');

		const actualContent = fs.readFileSync(tmpdir + '/my_test_bloc.dart');
		const expectedContent = `
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';

part 'my_test_events.dart';
part 'my_test_state.dart';

class MyTestBloc extends Bloc<MyTestEvent, MyTestState> {
  MyTestBloc()
      : super(const MyTestState(
          status: MyTestStatus.initial,
        )) {
    // TODO: implement event handlers
  }

  factory MyTestBloc.fromContext(BuildContext context) {
    return MyTestBloc();
  }
}		
`.trim();
	assert.equal(actualContent, expectedContent);

	});

	test('State file code check', async () => {
    await createBlocFiles(tmpdir, 'my_test', 'MyTest');

    const actualContent = fs.readFileSync(tmpdir + '/my_test_state.dart');
		const expectedContent = `
part of 'my_test_bloc.dart';

enum MyTestStatus { initial, loading, success, failure }

class MyTestState extends Equatable {
  const MyTestState({
    required this.status,
    this.error = '',
  });

  final MyTestStatus status;
  final String error;

  @override
  List<Object> get props => [status, error];

  MyTestState copyWith({
    MyTestStatus? status,
    String? error,
  }) {
    return MyTestState(
      status: status ?? this.status,
      error: error ?? this.error,
    );
  }
}
`.trim();
	assert.equal(actualContent, expectedContent);

	});

	test('Events file code check', async () => {
    await createBlocFiles(tmpdir, 'my_test', 'MyTest');

		const actualContent = fs.readFileSync(tmpdir + '/my_test_events.dart');
		const expectedContent = `
part of 'my_test_bloc.dart';

abstract class MyTestEvent extends Equatable {
  const MyTestEvent();

  @override
  List<Object> get props => [];
}
`.trim();
	assert.equal(actualContent, expectedContent);

	});


});
