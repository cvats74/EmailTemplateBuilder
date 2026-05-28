export class Toolbar {

    constructor(editor) {
        this.editor = editor;
    }

    init() {

        this.bindSave();

        this.bindUndo();

        this.bindRedo();

        this.bindPreview();
    }

    bindSave() {

        document
            .getElementById('btn-save')
            .addEventListener('click', () => {

                this.editor.runCommand('save-template');
            });
    }

    bindUndo() {

        document
            .getElementById('btn-undo')
            .addEventListener('click', () => {

                this.editor.UndoManager.undo();
            });
    }

    bindRedo() {

        document
            .getElementById('btn-redo')
            .addEventListener('click', () => {

                this.editor.UndoManager.redo();
            });
    }

    bindPreview() {

        document
            .getElementById('btn-preview')
            .addEventListener('click', () => {

                this.editor.runCommand('preview');
            });
    }

}
