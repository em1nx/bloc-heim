import { CodeAction, CodeActionKind, CodeActionProvider } from "vscode";

export class BlocCodeActionProvider implements CodeActionProvider {
  public provideCodeActions(): CodeAction[] {
    return [
      {
        command: "bloc-heim.wrapWithBlocProvider",
        title: "Wrap with BlocProvider",
      },
      {
        command: "bloc-heim.wrapWithBlocBuilder",
        title: "Wrap with BlocBuilder",
      },
      {
        command: "bloc-heim.wrapWithBlocSelector",
        title: "Wrap with BlocSelector",
      },
      {
        command: "bloc-heim.wrapWithMultiBlocProvider",
        title: "Wrap with MultiBlocProvider",
      },
      {
        command: "bloc-heim.wrapWithBlocListener",
        title: "Wrap with BlocListener",
      },
      {
        command: "bloc-heim.wrapWithMultiBlocListener",
        title: "Wrap with MultiBlocListener",
      },
      {
        command: "bloc-heim.wrapWithBlocConsumer",
        title: "Wrap with BlocConsumer",
      },
      {
        command: "bloc-heim.wrapWithRepositoryProvider",
        title: "Wrap with RepositoryProvider",
      },
      {
        command: "bloc-heim.wrapWithMultiRepositoryProvider",
        title: "Wrap with MultiRepositoryProvider",
      },
    ].map((c) => {
      const action = new CodeAction(c.title, CodeActionKind.Refactor);
      action.command = {
        command: c.command,
        title: c.title,
      };
      return action;
    });
  }
}