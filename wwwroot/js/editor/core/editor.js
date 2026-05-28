import { editorConfig } from './config.js';

export class EmailEditor {

    constructor() {
        this.editor = null;
    }

    init() {

        this.editor = grapesjs.init(editorConfig);

        this.loadPlugins();

        this.registerCommands();

        this.registerEvents();

        return this.editor;
    }

    loadPlugins() {

        this.editor.BlockManager.add('section', {
            label: 'Section',
            category: 'Layout',
            content: `
            <section style="padding:40px;background:#ffffff">
                <h1>Section Title</h1>
                <p>Section content</p>
            </section>
        `
        });

        this.editor.BlockManager.add('button', {
            label: 'Button',
            category: 'Basic',
            content: `
            <a 
                href="#"
                style="
                    display:inline-block;
                    padding:14px 28px;
                    background:#2563eb;
                    color:white;
                    text-decoration:none;
                    border-radius:8px;
                ">
                Click Here
            </a>
        `
        });

    }

    registerCommands() {

        this.editor.Commands.add('save-template', {
            run: async (editor) => {

                const html = editor.getHtml();
                const css = editor.getCss();

                console.log({
                    html,
                    css
                });

                alert('Template Saved');
            }
        });

        this.editor.Commands.add('clear-canvas', {
            run: (editor) => {

                editor.DomComponents.clear();
            }
        });

    }

    registerEvents() {

        this.editor.on('load', () => {
            console.log('Editor Loaded');
        });

        this.editor.on('component:add', () => {
            console.log('Component Added');
        });

    }

}