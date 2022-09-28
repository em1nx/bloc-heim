# Bloc Heim

Visual Studio Code extension which drastically reduces [bloc](https://bloclibrary.dev/#/)-related boilerplate code for Flutter projects. 

## Features

Command `bloc-heim.createBloc` for [equatable](https://pub.dev/packages/equatable)-based bloc template, which includes:

- Main bloc file. 
- Bloc state file — one class with status field, with respect to official [bloc naming convention](https://bloclibrary.dev/#/blocnamingconventions).  
- Bloc events file. 

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

- The Create Bloc command could be found in the Command Palette. 
- Also you could create blocs using folders context menu in the file explorer.

## Requirements

- [flutter_bloc ^8.0.0](https://pub.dev/packages/flutter_bloc)
- [equatable ^2.0.0](https://pub.dev/packages/equatable)
