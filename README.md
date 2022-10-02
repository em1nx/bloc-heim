# Bloc Heim

[VSCode](https://code.visualstudio.com/) extension which drastically reduces [bloc](https://bloclibrary.dev/#/)-related boilerplate code for [Flutter](https://flutter.dev/) projects. 

## Features

Command `bloc-heim.createBloc` for [equatable](https://pub.dev/packages/equatable)-based bloc template, which includes:

- Main bloc file. 
- Bloc state file — one class with status field, with respect to official [bloc naming convention](https://bloclibrary.dev/#/blocnamingconventions).  
- Bloc events file. 

Command `bloc-heim.addStateProperty`:
- Adds a new property snippet to bloc state class.
- Works only for [status-based state classes](https://bloclibrary.dev/#/blocnamingconventions?id=single-class-1). 

Commands and code-actions for all bloc Flutter widgets:
- BlocProvider: `bloc-heim.wrapWithBlocProvider`
- MultiBlocProvider: `bloc-heim.wrapWithMultiBlocProvider`
- BlocBuilder: `bloc-heim.wrapWithBlocBuilder`
- BlocSelector: `bloc-heim.wrapWithBlocSelector`
- BlocListener: `bloc-heim.wrapWithBlocListener`
- MultiBlocListener: `bloc-heim.wrapWithMultiBlocListener`
- BlocConsumer: `bloc-heim.wrapWithBlocConsumer`
- RepositoryProvider: `bloc-heim.wrapWithRepositoryProvider`
- MultiRepositoryProvider: `bloc-heim.wrapWithMultiRepositoryProvider`

## Usage

### Creating a bloc

- You can create a new bloc with `bloc-heim.createBloc` command in the Command Palette.
- Also, you can right-click on a folder in the file explorer and then select "Bloc Heim: Create Bloc" item.

### Adding a new state property

- Place a cursor within a state class and execute 'Add bloc state property` from Command Palette.
- Adding a new property from code actions is also available. 

### Wrapping a code with Bloc widgets

- Place cursor on a code (widget) you want to be wrapped with a Bloc Widget.
- Open code actions context menu: run a [Quick Fix or Refactor command](https://code.visualstudio.com/docs/editor/refactoring#_code-actions-quick-fixes-and-refactorings).
- Select a command which you want to use (Wrap with BlocBuilder, Wrap with BlocProvider etc.)
- Type bloc's name and state placeholders.


## Requirements

- [flutter_bloc ^8.0.0](https://pub.dev/packages/flutter_bloc)
- [equatable ^2.0.0](https://pub.dev/packages/equatable)
