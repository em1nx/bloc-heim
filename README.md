# Bloc Heim

Visual Studio Code extension which drastically reduces [bloc](https://bloclibrary.dev/#/)-related boilerplate code for Flutter projects. 

## Features

Currently, we only support codegen for [equatable](https://pub.dev/packages/equatable)-based bloc template, which includes:

- Main bloc file. 
- Bloc state file — one class with status field, with respect to official [bloc naming convention](https://bloclibrary.dev/#/blocnamingconventions).  
- Bloc events file. 

## Usage

- The Create Bloc command could be found in the Command Palette. 
- Also you could create blocs using folders context menu in the file explorer.

## Requirements

- [flutter_bloc ^8.0.0](https://pub.dev/packages/flutter_bloc)
- [equatable ^2.0.0](https://pub.dev/packages/equatable)
