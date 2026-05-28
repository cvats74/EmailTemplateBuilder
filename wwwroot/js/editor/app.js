mport { EmailEditor } from './core/editor.js';
import { Toolbar } from './ui/toolbar.js';

document.addEventListener('DOMContentLoaded', () => {

    const app = new EmailEditor();

    const editor = app.init();

    const toolbar = new Toolbar(editor);

    toolbar.init();

});